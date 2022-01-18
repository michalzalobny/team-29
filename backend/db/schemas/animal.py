"""Animal schemas"""
from typing import Optional
from pydantic import BaseModel, Field
from db.enums import Category


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
