"""Game schemas"""
from datetime import datetime
from typing import Optional, Dict

from pydantic import BaseModel, root_validator

from db import models
from db.database import SessionLocal


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
