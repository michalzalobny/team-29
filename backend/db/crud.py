"""CRUD operations to be used by endpoints"""
from typing import List, Optional
from datetime import datetime, timezone

from sqlalchemy.orm import Session

from db import models, schemas
from db.database import SessionLocal
from db.enums import Role, Channels
from dependencies import manager


@manager.user_loader()
def loader(username: str) -> models.User:
    """User loader for login manager. This is similar to `crud.get_user_by_username`
     but doesn't rely on dependency injection
     """
    with SessionLocal() as session:
        user = session.query(models.User).filter(models.User.username == username).first()
    return user


def get_user_by_username(username: str, db: Session) -> models.User:
    """Get a user from db by `username`"""
    return db.query(models.User).filter(models.User.username == username).first()


def get_user(user_id: int, db: Session) -> models.User:
    """Get a user from db by `user_id`"""
    return db.query(models.User).filter(models.User.id == user_id).first()


def get_user_by_email(email: str, db: Session) -> models.User:
    """Get a user from db by `email`"""
    return db.query(models.User).filter(models.User.email == email).first()


def get_users(db: Session, skip: int = 0, limit: int = 100, exclude_admin: bool = False) -> List[models.User]:
    """Get all users from the db

    Args:

        db (Session): Database session to be used
        skip (int, optional): number of users to be skipped from their order in the db (default: 0)
        limit (int, optional): number of result limit (default: 100)
        exclude_admin (bool, optional): exclude admin users (default False)

    Returns:

        List of `models.User`s
    """
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


def create_user(user: schemas.UserCreate, db: Session) -> models.User:
    """Create new models.User from schemas.UserCreate"""
    db_user = models.User(**user.dict())
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


def update_user(user: models.User, new_details: schemas.UserUpdate, db: Session) -> models.User:
    """Update existing models.User from UserUpdate schema"""
    for key, val in new_details.dict(exclude_unset=True).items():
        setattr(user, key, val)
    db.add(user)
    db.commit()
    return user


def delete_user(user_id: int, db: Session) -> Optional[models.User]:
    """Delete user by `user_id`"""
    user_to_delete = db.query(models.User).filter(models.User.id == user_id).first()
    if user_to_delete:
        db.delete(user_to_delete)
        db.commit()
        return user_to_delete
    return None


def create_animal(animal: schemas.AnimalCreate, db: Session) -> models.Animal:
    """Create new models.Animal from schemas.AnimalCreate"""
    db_animal = models.Animal(**animal.dict())
    db.add(db_animal)
    db.commit()
    db.refresh(db_animal)
    return db_animal


def get_animal(animal_id: int, db: Session) -> models.Animal:
    """Get Animal from db by `user_id`"""
    return db.query(models.Animal).filter(models.Animal.id == animal_id).first()


def get_animals(db: Session) -> List[models.Animal]:
    """Get all animals from db"""
    return db.query(models.Animal).all()


def add_animal_to_user(user_id: int, animal_id: int, db: Session) -> models.Animal:
    """Add animal to user using `user_id` with `animal_id`"""
    user = get_user(user_id=user_id, db=db)
    animal = get_animal(animal_id=animal_id, db=db)
    user.animals.append(animal)
    db.commit()
    return animal


def get_all_animal_by_user(user_id: int, db: Session) -> List[models.Animal]:
    """Get all animals a user subscribed to using `user_id`"""
    user = get_user(user_id=user_id, db=db)
    return user.animals


def update_animal(
        animal: models.Animal,
        new_details: schemas.AnimalUpdate,
        db: Session
) -> models.Animal:
    """Update models.Animal from schemas.AnimalUpdate"""
    for key, val in new_details.dict(exclude_unset=True).items():
        setattr(animal, key, val)
    db.add(animal)
    db.commit()
    return animal


def delete_animal(animal_id: int, db: Session) -> Optional[models.Animal]:
    """Delete an animal by `animal_id`"""
    animal_to_delete = db.query(models.Animal).filter(models.Animal.id == animal_id).first()
    if animal_to_delete:
        db.delete(animal_to_delete)
        db.commit()
        return animal_to_delete
    return None


def get_game(game_id: int, db: Session) -> models.Game:
    """Fetch Game object by `id` from database"""
    return db.query(models.Game).filter(models.Game.id == game_id).first()


def get_all_games(db: Session) -> List[models.Game]:
    """Return all games with limit and distinct-highest flag

    Args:

        limit (int): limit to game numbers (10 by default)
        distinct (bool): flag for getting only the highest score for each user (True by default)
        db (Session): Database session to be used

    Returns:
        List[db.schemas.game.Game]: Only `limit` number of records in descending order if distinct is False.
        If distinct is True, return only the max score for each user.
    """

    return db.query(models.Game) \
        .order_by(models.Game.score.desc()) \
        .all()


def get_all_games_by_user(user_id: int, db: Session) -> List[models.Game]:
    """Get all games by user by `user_id`"""
    user = get_user(user_id=user_id, db=db)
    return user.games


def add_game_to_user(game: schemas.GameCreate, user_id: int, db: Session) -> models.Game:
    """Add game record to user by `user_id`"""
    user = get_user(user_id=user_id, db=db)
    game = models.Game(**game.dict())
    user.games.append(game)
    db.commit()
    return game


def get_build(channel: Channels, db: Session) -> models.BuildTimes:
    """Gets the last build time of a channel. A channel refers to the resource the backend has.
     Only ANIMALS Channel is available at the moment

    Args:
        channel (enums.Channels): Channel variant to get the last build of
        db (Session): Database session to be used

    Returns:
        BuildTimes object that contains the channel name and last_build_time
    """
    assert isinstance(channel, Channels), "channel must be a Channels variant"

    build_obj = db.query(models.BuildTimes).filter(models.BuildTimes.channel_name == channel.value).first()

    if not build_obj:
        return update_or_create_last_build(channel, db)

    return build_obj


def update_or_create_last_build(channel: Channels, db: Session) -> models.BuildTimes:
    """Update the last build time of a channel. If the object with the channel name does not exist, create it."""
    assert isinstance(channel, Channels), "channel must be a Channels variant"
    build_obj = db.query(models.BuildTimes).filter(models.BuildTimes.channel_name == channel.value).first()

    if not build_obj:
        build_obj = models.BuildTimes(channel_name=channel.value)

    build_obj.last_build_date = datetime.now(tz=timezone.utc)
    db.add(build_obj)
    build_obj.commit()

    return build_obj
