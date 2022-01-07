from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

from settings import db_url, db_driver


# if sqlite is used for testing, etc
# SQLALCHEMY_DATABASE_URL = "sqlite:///./db.db"
# SQLALCHEMY_DATABASE_URL = f"mysql+pymysql://{db_username}:{str(db_password)}@127.0.0.1:3307/{db_name}?charset=utf8mb4"

if "sqlite" in db_driver:
    engine = create_engine(
        str(db_url), connect_args={"check_same_thread": False}
    )
else:
    engine = create_engine(str(db_url))

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()
