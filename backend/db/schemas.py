from enum import Enum
from typing import Optional, List

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
    LEAST_CONCERN = "least_concern"
    NEAR_THREATENED = "near_threatened"
    VULNERABLE = "vulnerable"
    ENDANGERED = "endangered"
    CRITICALLY_ENDANGERED = "critically_endangered"
    EXTINCT_IN_WILD = "extinct_in_wild"
    EXTINCT = "extinct"


class AnimalBase(BaseModel):
    name: str
    scientific_name: str
    description: str
    category: Category = Category.LEAST_CONCERN
    population: Optional[int] = None


class AnimalCreate(AnimalBase):
    ...


class Animal(AnimalBase):
    id: int

    class Config:
        orm_mode = True

