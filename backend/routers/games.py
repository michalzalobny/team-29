"""Endpoints for game related resources"""
from typing import List

from fastapi import APIRouter, Depends, Security
from sqlalchemy.orm import Session

from db import schemas, crud, models
from dependencies import get_db, manager

router = APIRouter(
    prefix="/games",
    responses={404: {"description": "Not found"}},
)


@router.get("", response_model=List[schemas.Game], tags=["games"])
def read_all_games(limit: int = 10, db: Session = Depends(get_db)):
    """Return all games in descending order

    Args:

        limit (int): limit to game numbers (10 by default)
        db (Session, optional): Database session to be used (dependency injected by default)

    Returns:

        List[schemas.Game]: List of Game objects
    """
    return crud.get_all_games(limit=limit, db=db)


@router.delete("", tags=["_admin"], dependencies=[Security(manager, scopes=["ADMIN"])])
def reset_leaderboard(db: Session = Depends(get_db)):
    """Reset the leaderboard. Only when logged in as admin."""
    db.query(models.Game).delete()
    db.commit()
    return {"message": "all game records have been deleted"}
