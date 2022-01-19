"""
This configuration snippet is based
on https://www.fastapitutorial.com/blog/get-request-retrieve-fastapi/
"""
import os
import sys
from typing import Any
from typing import Generator

import pytest
from fastapi import FastAPI
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

import main
from db.database import Base
from dependencies import get_db
from settings import test_db_url


# this is to include backend dir in sys.path so that we can import from db,main.py
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

# create engine
if test_db_url.startswith("sqlite"):
    engine = create_engine(
        test_db_url, connect_args={"check_same_thread": False}
    )
else:
    engine = create_engine(test_db_url)


SessionTesting = sessionmaker(autocommit=False, autoflush=False, bind=engine)


@pytest.fixture(scope="function")
def test_app() -> Generator[FastAPI, Any, None]:
    """
    Create a fresh database on each test case.
    """
    Base.metadata.create_all(engine)  # Create the tables.
    _app = main.app
    yield _app
    Base.metadata.drop_all(engine)


@pytest.fixture(scope="function")
def session(test_app: FastAPI) -> Generator[SessionTesting, Any, None]:
    connection = engine.connect()
    transaction = connection.begin()
    session = SessionTesting(bind=connection)
    yield session  # use the session in tests.
    session.close()
    transaction.rollback()
    connection.close()


@pytest.fixture(scope="function")
def client(
        test_app: FastAPI, session: SessionTesting
) -> Generator[TestClient, Any, None]:
    """
    Create a new FastAPI TestClient that uses the `db_session` fixture to override
    the `get_db` dependency that is injected into routes.
    """

    def _get_test_db():
        try:
            yield session
        finally:
            pass

    test_app.dependency_overrides[get_db] = _get_test_db
    with TestClient(test_app) as test_client:
        yield test_client
