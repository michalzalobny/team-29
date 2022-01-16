"""
Schemas needed for data transmission. This is different
to models as this deals with the shape of input from the user
"""
from datetime import datetime
from enum import Enum
from typing import Optional

from pydantic import BaseModel, Field


class Role(str, Enum):
    ADMIN = "ADMIN"
    USER = "USER"


class UserBase(BaseModel):
    email: str
    username: str


class UserCreate(UserBase):
    password: str


class UserUpdate(BaseModel):
    """User update schema allowing for optional fields that UserBase and subclasses don't offer"""
    email: Optional[str] = Field(None)
    username: Optional[str] = Field(None)
    password: Optional[str] = Field(None)


class User(UserBase):
    id: int
    is_active: bool
    role: Role = Role.USER

    class Config:
        orm_mode = True


class Category(str, Enum):
    """Category for an animal's population status"""
    LEAST_CONCERN = "LEAST_CONCERN"
    NEAR_THREATENED = "NEAR_THREATENED"
    VULNERABLE = "VULNERABLE"
    ENDANGERED = "ENDANGERED"
    CRITICALLY_ENDANGERED = "CRITICALLY_ENDANGERED"
    EXTINCT_IN_WILD = "EXTINCT_IN_WILD"
    EXTINCT = "EXTINCT"


class AnimalBase(BaseModel):
    name: str
    scientific_name: str
    description: str
    category: Category = Category.LEAST_CONCERN
    population: Optional[int] = None


class AnimalCreate(AnimalBase):
    ...


class AnimalUpdate(BaseModel):
    name: Optional[str] = Field(None)
    scientific_name: Optional[str] = Field(None)
    description: Optional[str] = Field(None)
    category: Optional[Category] = Field(None)
    population: Optional[int] = Field(None)


class Animal(AnimalBase):
    id: int

    class Config:
        orm_mode = True


class GameBase(BaseModel):
    score: int


class GameCreate(GameBase):
    ...


class Game(GameBase):
    id: int
    date: datetime

    class Config:
        orm_mode = True
