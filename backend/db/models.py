"""Database tables modeled using classes"""
from datetime import datetime

from sqlalchemy import (
    Boolean, Column, Integer, String, Text, Enum, Table,
    ForeignKey, CheckConstraint, TIMESTAMP, DateTime
)
from sqlalchemy.orm import relationship
from sqlalchemy.sql.functions import current_timestamp

from db.database import Base
from db.enums import Category, Role

user_animal = Table("user_animal", Base.metadata,
                    Column("user_id", ForeignKey("users.id"), primary_key=True),
                    Column("animal_id", ForeignKey("animals.id"), primary_key=True)
                    )


class User(Base):
    """User model for database"""
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), unique=True, nullable=False, index=True)
    email = Column(String(100), unique=True, nullable=False, index=True)
    password = Column(String(200), nullable=False)
    is_active = Column(Boolean, default=True)
    role = Column(Enum(Role, validate_strings=True), nullable=False, default=Role.USER)

    animals = relationship(
        "Animal",
        secondary=user_animal,
        back_populates="users"
    )

    games = relationship(
        "Game",
        backref="users",
        cascade="all,delete"
    )


class Animal(Base):
    """Animal model for database"""
    __tablename__ = "animals"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50), unique=True, nullable=False, index=True)
    scientific_name = Column(String(100), unique=True, nullable=False, index=True)
    description = Column(Text, default="")
    category = Column(Enum(Category, validate_strings=True), nullable=False, default=Category.LEAST_CONCERN)
    population = Column(Integer, default=None)

    users = relationship(
        "User",
        secondary=user_animal,
        back_populates="animals"
    )


class Game(Base):
    """Game model for database"""
    __tablename__ = "games"

    id = Column(Integer, primary_key=True)
    score = Column(Integer, CheckConstraint("score >= 0"))
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    date = Column(TIMESTAMP, default=current_timestamp())


class BuildTimes(Base):
    """Stores datetime of last updates"""
    __tablename__ = "build_times"

    id = Column(Integer, primary_key=True)
    channel_name = Column(String(20), unique=True, nullable=False)
    last_build_date = Column(DateTime, default=datetime.now())
