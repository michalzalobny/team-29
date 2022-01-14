from typing import List
from fastapi import APIRouter, Depends, HTTPException, Security
from sqlalchemy.orm import Session

from db import schemas, crud, models
from dependencies import get_db, manager

router = APIRouter(
    prefix="/games",
    responses={404: {"description": "Not found"}},
)


@router.get("", response_model=List[schemas.Game], tags=["games"])
def read_all_games(db: Session = Depends(get_db)):
    return crud.get_all_games(db=db)


@router.delete("", tags=["_admin"], dependencies=[Security(manager, scopes=["ADMIN"])])
def reset_leaderboard(db: Session = Depends(get_db)):
    db.query(models.Game).delete()
    db.commit()
    return {"message": "all game records have been deleted"}


# @router.get()
