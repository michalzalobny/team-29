"""
Schemas needed for data transmission. This is different
to models as this deals with the shape of input from the user
"""
from datetime import datetime
from typing import Optional, List, Dict, Any

from pydantic import BaseModel, Field, EmailStr, root_validator

from db import models
from db.database import SessionLocal
from db.enums import Category, Role


class UserBase(BaseModel):
    """Base schema for users"""
    email: str
    username: str


class UserCreate(UserBase):
    """Schema for creating users"""
    password: str


class UserUpdate(BaseModel):
    """User update schema allowing for optional fields that UserBase and subclasses don't offer"""
    email: Optional[str] = Field(None)
    username: Optional[str] = Field(None)
    password: Optional[str] = Field(None)


class User(UserBase):
    """User schema as a response model"""
    id: int
    is_active: bool
    role: Role = Role.USER

    class Config:   # pylint: disable=C0115
        orm_mode = True


class AnimalBase(BaseModel):
    """Base schema for Animals"""
    name: str
    scientific_name: str
    description: str
    category: Category = Category.LEAST_CONCERN
    population: Optional[int] = None


class AnimalCreate(AnimalBase):
    """Schema for creating animals"""
    ...


class AnimalUpdate(BaseModel):
    """Schema for updating animals. Allows optional fields."""
    name: Optional[str] = Field(None)
    scientific_name: Optional[str] = Field(None)
    description: Optional[str] = Field(None)
    category: Optional[Category] = Field(None)
    population: Optional[int] = Field(None)


class Animal(AnimalBase):
    """Animal schema as a response model"""
    id: int

    class Config:   # pylint: disable=C0115
        orm_mode = True


class GameBase(BaseModel):
    """Base schema for Games"""
    score: int


class GameCreate(GameBase):
    """Schema for creating games"""
    ...


class Game(GameBase):
    """Response model for games"""
    id: int
    date: datetime
    user_id: int
    username: Optional[str]

    @root_validator(allow_reuse=True)
    def compute_user(cls, values) -> Dict:      # pylint: disable=E0213,R0201
        """Populate user field by fetching models.User using `user_id` from db"""
        with SessionLocal() as db:
            user_obj = db.query(models.User).filter(models.User.id == values["user_id"]).first()

        if user_obj:
            values["username"] = user_obj.username

        return values

    class Config:   # pylint: disable=C0115
        orm_mode = True


class TemplateEmailSchema(BaseModel):
    """Schema for sending Emails using Template"""
    email: List[EmailStr]
    subject: str
    body: Dict[str, Any]
    template_name: str
