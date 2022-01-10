from sqlalchemy import Boolean, Column, Integer, String, Text, Enum, Table, ForeignKey
from sqlalchemy.orm import relationship

from .database import Base
from .schemas import Category


user_animal = Table("user_animal", Base.metadata,
                    Column("user_id", ForeignKey("users.id"), primary_key=True),
                    Column("right_id", ForeignKey("animals.id"), primary_key=True)
                    )


class User(Base):

    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), unique=True, nullable=False, index=True)
    email = Column(String(100), unique=True, nullable=False, index=True)
    password = Column(String(200), nullable=False)
    is_active = Column(Boolean, default=True)
    animals = relationship(
        "Animal",
        secondary=user_animal,
        back_populates="users"
    )


class Animal(Base):

    __tablename__ = "animals"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50), unique=True, nullable=False, index=True)
    scientific_name = Column(String(100), unique=True, nullable=False, index=True)
    description = Column(Text)
    category = Column(Enum(Category, validate_strings=True), nullable=False, default=Category.LEAST_CONCERN)
    population_low_est = Column(Integer, default=None)
    population_high_est = Column(Integer, default=None)

    users = relationship(
        "User",
        secondary=user_animal,
        back_populates="animals"
    )
