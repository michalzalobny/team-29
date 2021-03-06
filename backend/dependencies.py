"""Utilities for dependency injection"""
from datetime import timedelta

from fastapi_login import LoginManager

from db.database import SessionLocal
from settings import secret_key


def get_db():
    """Create a database session"""
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


manager = LoginManager(
    secret_key, "auth/login",
    default_expiry=timedelta(hours=12)
)
