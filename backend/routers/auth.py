import logging
from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from db import schemas, crud, models
from dependencies import get_db, manager
from utils import verify_password, get_password_hash

router = APIRouter(
    prefix="/auth",
    tags=["auth"],
    responses={404: {"description": "Not found"}},
)


@router.post("/login")
def login_user(data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    # details from the form
    username = data.username
    password = data.password

    # fetch user from the database
    user: models.User = crud.get_user_by_username(username, db=db)

    # either the input username doesn't exist or
    # the username exists but the password is wrong
    if not user or not verify_password(password, user.password):
        logging.warning('SECURITY - Failed Log in [%s, %s]', user.id, user.email)
        raise HTTPException(status_code=401, detail="Wrong details for authentication")

    # enforce scoping roles
    scopes = [user.role.value]

    access_token = manager.create_access_token(
        data={"sub": username},
        scopes=scopes
    )

    logging.info('SECURITY - Log in [%s, %s]', user.id, user.email)
    return {"access_token": access_token, "token_type": "bearer"}


@router.post("/register", response_model=schemas.User)
def register_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = crud.get_user_by_email(email=user.email, db=db)
    if db_user:
        logging.warning('SECURITY - Failed register (Email exists) [%s]', user.email)
        raise HTTPException(status_code=400, detail="Email already registered")

    user.password = get_password_hash(user.password)

    logging.info('SECURITY - User registration [%s, %s]', user.username, user.email)
    return crud.create_user(user=user, db=db)
