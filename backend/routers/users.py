"""Endpoints for user related resource"""
from typing import List

from fastapi import APIRouter, Depends, HTTPException, Security
from sqlalchemy.orm import Session

from db import schemas, crud, models
from dependencies import get_db, manager

router = APIRouter(
    prefix="/users",
    responses={404: {"description": "Not found"}},
)


@router.get("/", response_model=List[schemas.User], tags=["_admin"], dependencies=[Security(manager, scopes=["ADMIN"])])
def read_users(
        skip: int = 0,
        limit: int = 100,
        db: Session = Depends(get_db)):
    """Get all users. FOR DEBUGGING AND TESTING PURPOSES ONLY"""
    users = crud.get_users(db, skip=skip, limit=limit, exclude_admin=True)
    return users


@router.get("/me", response_model=schemas.User, tags=["current user"])
def read_current_user(user: models.User = Depends(manager)):
    return schemas.User.from_orm(user)


@router.patch("/me", response_model=schemas.User, tags=["current user"])
def update_user_details(
        new_user_details: schemas.UserUpdate,
        user: models.User = Depends(manager),
        db: Session = Depends(get_db)
):
    return crud.update_user(user=user, new_details=new_user_details, db=db)


@router.get("/me/animals", response_model=List[schemas.Animal], tags=["current user to animal"])
def read_all_animals_by_user(user: models.User = Depends(manager), db: Session = Depends(get_db)):
    return crud.get_all_animal_by_user(user_id=user.id, db=db)


@router.patch("/me/animals", response_model=schemas.Animal, tags=["current user to animal"])
def add_animal_to_user(animal_id: int, user: models.User = Depends(manager), db: Session = Depends(get_db)):
    return crud.add_animal_to_user(user_id=user.id, animal_id=animal_id, db=db)


@router.get("/me/games", response_model=List[schemas.Game], tags=["current user to games"])
def read_all_games_by_user(user: models.User = Depends(manager), db: Session = Depends(get_db)):
    return crud.get_all_games_by_user(user_id=user.id, db=db)


@router.post("/me/games", response_model=schemas.Game, tags=["current user to games"])
def create_user_game(game: schemas.GameCreate, user: schemas.User = Depends(manager), db: Session = Depends(get_db)):
    return crud.add_game_to_user(game, user_id=user.id, db=db)


@router.delete(
    "/{user_id}",
    response_model=schemas.User,
    dependencies=[Security(manager, scopes=["ADMIN"])], tags=["_admin"]
)
def delete_user(user_id, db: Session = Depends(get_db)):
    user_to_delete = crud.delete_user(user_id=user_id, db=db)
    if not user_to_delete:
        raise HTTPException(status_code=404, detail=f"User with id {user_id} does not exist")
    return user_to_delete
