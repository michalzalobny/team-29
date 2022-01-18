"""Endpoints for animal related resource"""
from typing import List

from fastapi import APIRouter, Depends, Security, HTTPException
from sqlalchemy.orm import Session

from db import crud
from db import schemas
from dependencies import get_db, manager

router = APIRouter(
    prefix="/animals",
    responses={404: {"description": "Not found"}},
)


@router.get("", response_model=List[schemas.Animal], tags=["animals"])
def read_animals(session: Session = Depends(get_db)):
    """Get all animals"""
    return crud.get_animals(session)


@router.post(
    "",
    response_model=schemas.Animal,
    dependencies=[Security(manager, scopes=["ADMIN"])],
    tags=["_admin"],
)
def create_animal(animal: schemas.AnimalCreate, session: Session = Depends(get_db)):
    """Create new animal record"""
    db_animal = crud.create_animal(animal, session)
    return db_animal


@router.patch(
    "/{animal_id}",
    response_model=schemas.Animal,
    dependencies=[Security(manager, scopes=["ADMIN"])],
    tags=["_admin"],
)
def update_animal(animal_id: int, new_details: schemas.AnimalUpdate, session: Session = Depends(get_db)):
    """Update an existing animal

    Args:

        animal_id (int): ID of the animal
        new_details (db.schemas.animal.AnimalUpdate): AnimalUpdate object for new animal details
        session (Session, optional): Database session to be used (dependency injected by default)

    Returns:

        schemas.Animal: Object that contains the updated animal details

    Raises:

        HTTPException 404: Animal doesn't exist
    """
    db_animal = crud.get_animal(animal_id, session)

    if not db_animal:
        raise HTTPException(status_code=404, detail="Animal does not exist")

    crud.update_animal(db_animal, new_details, session)
    return db_animal


@router.delete(
    "/{animal_id}",
    response_model=schemas.Animal,
    dependencies=[Security(manager, scopes=["ADMIN"])],
    tags=["_admin"],
)
def delete_animal(animal_id: int, session: Session = Depends(get_db)):
    """Delete an existing animal

    Args:

        animal_id (int): ID of the animal to be fetched
        session (Session, optional): Database session to be used (dependency injected by default)

    Returns:

        schemas.Animal: Object that was deleted

    Raises:

        HTTPException 404: Animal doesn't exist
    """
    animal_to_delete = crud.delete_animal(animal_id, session)
    if not animal_to_delete:
        raise HTTPException(status_code=404, detail="Animal does not exist")
    return animal_to_delete
