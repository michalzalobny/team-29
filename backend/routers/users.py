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


@router.get(
    "/", response_model=List[schemas.User],
    tags=["_admin"],
    dependencies=[Security(manager, scopes=["ADMIN"])],
)
def read_users(
        skip: int = 0,
        limit: int = 100,
        session: Session = Depends(get_db),
):
    """Get all users."""
    users = crud.get_users(session, skip=skip, limit=limit, exclude_admin=True)
    return users


@router.get("/me", response_model=schemas.User, tags=["current user"])
def read_current_user(user: models.User = Depends(manager)):
    """Get current logged-in user based on the JWT passed"""
    return user


@router.patch("/me", response_model=schemas.User, tags=["current user"])
def update_user_details(
        new_user_details: schemas.UserUpdate,
        user: models.User = Depends(manager),
        session: Session = Depends(get_db),
):
    """Update user details from the given body

    Args:

        new_user_details (session.schemas.user.UserUpdate): new user details to be used for update
        user (models.User): current user automatically fetched from the db
        session (Session, optional): Database session to be used (dependency injected by default)

    Returns:

        schemas.User: user object with updated details
    """
    return crud.update_user(user=user, new_details=new_user_details, db=session)


@router.get("/me/animals", response_model=List[schemas.Animal], tags=["current user to animal"])
def read_all_animals_by_user(user: models.User = Depends(manager), session: Session = Depends(get_db)):
    """Fetch all animals that the current user is subscribed to"""
    return crud.get_all_animal_by_user(user_id=user.id, db=session)


@router.patch("/me/animals", response_model=schemas.Animal, tags=["current user to animal"])
def add_animal_to_user(
        animal_id: int,
        user: models.User = Depends(manager),
        session: Session = Depends(get_db)
):
    """Add animal to the current user's subscription

    Args:

        animal_id (int): ID of the animal
        user (models.User): current user
        session (Session, optional): Database session to be used (dependency injected by default)

    Returns:

        schemas.Animal: object that current user subscribed to
    """
    return crud.add_animal_to_user(user_id=user.id, animal_id=animal_id, db=session)


@router.get(
    "/me/games",
    response_model=List[schemas.Game],
    response_model_exclude={"user_id"},
    tags=["current user to games"],
)
def read_all_games_by_user(user: models.User = Depends(manager), session: Session = Depends(get_db)):
    """Fetch all game records of the current user"""
    return crud.get_all_games_by_user(user_id=user.id, db=session)


@router.post(
    "/me/games",
    response_model=schemas.Game,
    response_model_exclude={"user_id"},
    tags=["current user to games"],
)
def create_user_game(
        game: schemas.GameCreate,
        user: schemas.User = Depends(manager),
        session: Session = Depends(get_db)
):
    """Create a new game record for the current user"""
    return crud.add_game_to_user(game, user_id=user.id, db=session)


@router.delete(
    "/{user_id}",
    response_model=schemas.User,
    dependencies=[Security(manager, scopes=["ADMIN"])],
    tags=["_admin"]
)
def delete_user(user_id, session: Session = Depends(get_db)):
    """Delete user with the `user_id`"""
    user_to_delete = crud.delete_user(user_id=user_id, db=session)
    if not user_to_delete:
        raise HTTPException(status_code=404, detail=f"User with id {user_id} does not exist")
    return user_to_delete
