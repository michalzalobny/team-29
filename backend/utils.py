"""Utilities for the project in general"""
import logging

from passlib.context import CryptContext

# Password verification
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def verify_password(plain_password: str, hashed_password: str) -> bool:
    """Check whether plaintext password matches the hashed password in the database"""
    return pwd_context.verify(plain_password, hashed_password)


def get_password_hash(password: str) -> str:
    """Get the hash of a password"""
    return pwd_context.hash(password)


# Logging configuration
fh = logging.FileHandler('logs.log', 'a')
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s: %(message)s', '%m/%d/%Y %I:%M:%S %p')
fh.setFormatter(formatter)

logger = logging.getLogger('')
logger.propagate = False
logger.setLevel(logging.INFO)
logger.addHandler(fh)
