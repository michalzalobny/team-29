from typing import List

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from db import schemas, crud
from dependencies import get_db

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
    db_animal = crud.create_animal(db, animal)
    return schemas.Animal.from_orm(db_animal)
