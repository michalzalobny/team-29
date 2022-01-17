"""Endpoints for game related resources"""
from typing import List

from fastapi import APIRouter, Depends, Security, HTTPException
from sqlalchemy.orm import Session

from db import schemas, crud, models
from dependencies import get_db, manager

router = APIRouter(
    prefix="/games",
    responses={404: {"description": "Not found"}},
)


@router.get(
    "", response_model=List[schemas.Game],
    response_model_exclude={"user_id"},
    tags=["games"]
)
def read_all_games(limit: int = 10, distinct: bool = True, db: Session = Depends(get_db)):
    """Return all games with max score for each player

    Args:

        limit (int): limit to game numbers (10 by default)
        distinct (bool): flag for getting only the highest score for each user (True by default)
        db (Session, optional): Database session to be used (dependency injected by default)

    Returns:

        List[schemas.Game]: Only `limit` number of records in descending order if distinct is False.
        If distinct is True, return only the max score for each user.
    """
    return crud.get_all_games(limit=limit, distinct=distinct, db=db)


@router.get(
    "/{game_id}", response_model=schemas.Game,
    response_model_exclude={"user_id"},
    tags=["games"]
)
def read_game(game_id: int, db: Session = Depends(get_db)):
    """Get specific game details by game_id"""
    db_game = crud.get_game(game_id, db)

    if not db_game:
        raise HTTPException(status_code=404, detail="Game does not exist")

    return db_game


@router.delete("", tags=["_admin"], dependencies=[Security(manager, scopes=["ADMIN"])])
def reset_leaderboard(db: Session = Depends(get_db)):
    """Reset the leaderboard. Only when logged in as admin."""
    db.query(models.Game).delete()
    db.commit()
    return {"message": "all game records have been deleted"}
