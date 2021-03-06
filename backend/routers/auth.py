"""Endpoints for authentication related resource"""
from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session

from db import schemas, crud, models
from dependencies import get_db, manager
from utils import verify_password, get_password_hash, logger

router = APIRouter(
    prefix="/auth",
    tags=["auth"],
    responses={404: {"description": "Not found"}},
)


@router.post("/login")
def login_user(data: OAuth2PasswordRequestForm = Depends(), session: Session = Depends(get_db)):
    """Login route for generating JSON Web Tokens"""
    # details from the form
    username = data.username
    password = data.password

    # fetch user from the database
    user: models.User = crud.get_user_by_username(username, db=session)

    # either the input username doesn't exist or
    # the username exists but the password is wrong
    if not user or not verify_password(password, user.password):
        logger.warning('SECURITY - Failed Log in [%s]', username)
        raise HTTPException(status_code=401, detail="Wrong details for authentication")

    # enforce scoping roles
    scopes = [user.role.value]

    access_token = manager.create_access_token(
        data={"sub": username},
        scopes=scopes
    )

    logger.info('SECURITY - Log in [%s, %s]', user.id, user.email)
    return {"access_token": access_token, "token_type": "bearer"}


@router.post("/register", response_model=schemas.User)
def register_user(user: schemas.UserCreate, session: Session = Depends(get_db)):
    """Register as a user"""
    db_user = crud.get_user_by_email(email=user.email, db=session)
    if db_user:
        logger.warning('SECURITY - Failed register (Email exists) [%s]', user.email)
        raise HTTPException(status_code=400, detail="Email already registered")

    user.password = get_password_hash(user.password)

    logger.info('SECURITY - User registration [%s, %s]', user.username, user.email)
    return crud.create_user(user=user, db=session)
