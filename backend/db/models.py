from sqlalchemy import Boolean, Column, Integer, String
from .database import Base


class User(Base):

    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(100), unique=True, index=True)
    password = Column(String(200))
    is_active = Column(Boolean, default=True)
