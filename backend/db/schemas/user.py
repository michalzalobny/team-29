"""User schemas"""
from typing import Optional

from pydantic import BaseModel, Field

from db.enums import Role


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
