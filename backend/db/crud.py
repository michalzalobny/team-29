from db.database import engine
from sqlalchemy.orm import Session
from . import models, schemas
from dependencies import manager


@manager.user_loader()
def loader(username: str):
    user: models.User
    with Session(engine) as db:
        user = db.query(models.User).filter(models.User.username == username).first()
    return user


def get_user_by_username(username: str, db: Session):
    return db.query(models.User).filter(models.User.username == username).first()


def get_user(db: Session, user_id: int) -> models.User:
    return db.query(models.User).filter(models.User.id == user_id).first()


def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()


def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.User).offset(skip).limit(limit).all()


def create_user(db: Session, user: schemas.UserCreate):
    db_user = models.User(email=user.email, username=user.username, password=user.password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


def create_animal(db: Session, animal: schemas.AnimalCreate):
    db_animal = models.Animal(**animal.dict())
    db.add(db_animal)
    db.commit()
    db.refresh(db_animal)
    return db_animal


def get_animal(db: Session, animal_id: int):
    return db.query(models.Animal).filter(models.Animal.id == animal_id).first()


def get_animals(db: Session):
    return db.query(models.Animal).all()


def add_animal_to_user(db: Session, user_id: int, animal_id: int):
    user = get_user(db, user_id=user_id)
    animal = get_animal(db, animal_id=animal_id)
    user.animals.append(animal)
    db.commit()
    return animal


def get_all_animal_by_user(db: Session, user_id: int):
    user = get_user(db, user_id=user_id)
    return user.animals
