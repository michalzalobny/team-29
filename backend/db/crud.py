"""CRUD operations to be used by endpoints"""
from sqlalchemy.orm import Session

from db import models, schemas
from db.database import engine
from db.schemas import Role
from dependencies import manager


@manager.user_loader()
def loader(username: str):
    user: models.User
    with Session(engine) as db:
        user = db.query(models.User).filter(models.User.username == username).first()
    return user


def get_user_by_username(username: str, db: Session):
    return db.query(models.User).filter(models.User.username == username).first()


def get_user(user_id: int, db: Session) -> models.User:
    return db.query(models.User).filter(models.User.id == user_id).first()


def get_user_by_email(email: str, db: Session):
    return db.query(models.User).filter(models.User.email == email).first()


def get_users(db: Session, skip: int = 0, limit: int = 100, exclude_admin: bool = False):
    if exclude_admin:
        return db.query(models.User) \
            .filter(models.User.role == Role.USER) \
            .offset(skip) \
            .limit(limit) \
            .all()

    return db.query(models.User) \
        .offset(skip) \
        .limit(limit) \
        .all()


def create_user(user: schemas.UserCreate, db: Session):
    db_user = models.User(email=user.email, username=user.username, password=user.password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


def update_user(user: models.User, new_details: schemas.UserUpdate, db: Session):
    for key, val in new_details.dict(exclude_unset=True).items():
        setattr(user, key, val)
    db.add(user)
    db.commit()
    return user


def delete_user(user_id: int, db: Session):
    user_to_delete = db.query(models.User).filter(models.User.id == user_id).first()
    if user_to_delete:
        db.delete(user_to_delete)
        db.commit()
        return user_to_delete
    return None


def create_animal(animal: schemas.AnimalCreate, db: Session):
    db_animal = models.Animal(**animal.dict())
    db.add(db_animal)
    db.commit()
    db.refresh(db_animal)
    return db_animal


def get_animal(animal_id: int, db: Session):
    return db.query(models.Animal).filter(models.Animal.id == animal_id).first()


def get_animals(db: Session):
    return db.query(models.Animal).all()


def add_animal_to_user(user_id: int, animal_id: int, db: Session):
    user = get_user(user_id=user_id, db=db)
    animal = get_animal(animal_id=animal_id, db=db)
    user.animals.append(animal)
    db.commit()
    return animal


def get_all_animal_by_user(user_id: int, db: Session):
    user = get_user(user_id=user_id, db=db)
    return user.animals


def update_animal(animal: models.Animal, new_details: schemas.AnimalUpdate, db: Session):
    for key, val in new_details.dict(exclude_unset=True).items():
        setattr(animal, key, val)
    db.add(animal)
    db.commit()
    return animal


def delete_animal(animal_id: int, db: Session):
    animal_to_delete = db.query(models.Animal).filter(models.Animal.id == animal_id).first()
    if animal_to_delete:
        db.delete(animal_to_delete)
        db.commit()
        return animal_to_delete
    return None


def get_all_games(db: Session, limit: int):
    return db.query(models.Game).order_by(models.Game.score.desc()) \
        .limit(limit) \
        .all()


def get_all_games_by_user(user_id: int, db: Session):
    user = get_user(user_id=user_id, db=db)
    return user.games


def add_game_to_user(game: schemas.GameCreate, user_id: int, db: Session):
    user = get_user(user_id=user_id, db=db)
    game = models.Game(**game.dict())
    user.games.append(game)
    db.commit()
    return game
