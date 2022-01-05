from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session

from db import schemas, crud
from dependencies import get_db, manager

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
    user = crud.get_user_by_username(username, db=db)

    # either the input username doesn't exist or
    # the username exists but the password is wrong
    if not user or (password != user.password):
        raise HTTPException(status_code=401, detail="Wrong details for authentication")

    access_token = manager.create_access_token(
        data={"sub": username}
    )

    return {"access_token": access_token, "token_type": "bearer"}


@router.post("/register", response_model=schemas.User, dependencies=[Depends(manager)])
def register_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = crud.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return crud.create_user(db=db, user=user)
