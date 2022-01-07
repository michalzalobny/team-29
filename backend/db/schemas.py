from enum import Enum
from typing import Optional

from pydantic import BaseModel


class UserBase(BaseModel):
    email: str
    username: str


class UserCreate(UserBase):
    password: str


class User(UserBase):
    id: int
    is_active: bool

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
    population_low_est: Optional[int] = None
    population_high_est: Optional[int] = None


class AnimalCreate(AnimalBase):
    ...


class Animal(AnimalBase):
    id: int

    class Config:
        orm_mode = True

