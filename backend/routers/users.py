from typing import List
from fastapi import APIRouter, Depends, HTTPException, Security
from sqlalchemy.orm import Session

from db import schemas, crud, models
from dependencies import get_db, manager

router = APIRouter(
    prefix="/users",
    responses={404: {"description": "Not found"}},
)


@router.get("/", response_model=List[schemas.User], tags=["users"])
def read_users(
        skip: int = 0,
        limit: int = 100,
        user: models.User = Security(manager, scopes=["ADMIN"]),
        db: Session = Depends(get_db)):
    """Get all users. FOR DEBUGGING AND TESTING PURPOSES ONLY"""
    users = crud.get_users(db, skip=skip, limit=limit, exclude_admin=True)
    return users


@router.get("/me", response_model=schemas.User, tags=["users"])
def read_current_user(user: models.User = Depends(manager)):
    return schemas.User.from_orm(user)


@router.patch("/me", response_model=schemas.User, tags=["users"])
def update_user_details(
        new_user_details: schemas.UserUpdate,
        user: models.User = Depends(manager),
        db: Session = Depends(get_db)
):
    return crud.update_user(user=user, new_details=new_user_details, db=db)


@router.get("/me/animals", response_model=List[schemas.Animal], tags=["user to animal"])
def read_all_animals_by_user(user: models.User = Depends(manager), db: Session = Depends(get_db)):
    return crud.get_all_animal_by_user(user_id=user.id, db=db)


@router.patch("/me/animals", response_model=schemas.Animal, tags=["user to animal"])
def add_animal_to_user(animal_id: int, user: models.User = Depends(manager), db: Session = Depends(get_db)):
    return crud.add_animal_to_user(user_id=user.id, animal_id=animal_id, db=db)
