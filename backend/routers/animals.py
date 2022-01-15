from typing import List

from fastapi import APIRouter, Depends, Security, HTTPException
from sqlalchemy.orm import Session

from db import schemas, crud
from dependencies import get_db, manager

router = APIRouter(
    prefix="/animals",
    tags=["animals"],
    responses={404: {"description": "Not found"}},
)


@router.get("", response_model=List[schemas.Animal])
def read_animals(db: Session = Depends(get_db)):
    return crud.get_animals(db)


@router.post("", response_model=schemas.Animal)
def create_animals(animal: schemas.AnimalCreate, db: Session = Depends(get_db)):
    db_animal = crud.create_animal(animal, db)
    return schemas.Animal.from_orm(db_animal)


@router.delete("/{animal_id}", response_model=schemas.Animal)
def delete_animal(animal_id: int, db: Session = Depends(get_db)):
    animal_to_delete = crud.delete_animal(animal_id, db)
    if animal_to_delete:
        return animal_to_delete
    else:
        raise HTTPException(status_code=404, detail="Animal does not exist")
