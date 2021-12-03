from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

from backend.settings import db_username, db_password, db_name


# if sqlite is used for testing, etc
# SQLALCHEMY_DATABASE_URL = "sqlite:///./db.db"
# engine = create_engine(
#     SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
# )

SQLALCHEMY_DATABASE_URL = f"mysql+pymysql://{db_username}:{str(db_password)}@127.0.0.1:3307/{db_name}?charset=utf8mb4"
engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
