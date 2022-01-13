import logging

from db import schemas, models

from passlib.context import CryptContext


def user_model_to_schema(user: models.User) -> schemas.User:
    """
    Convert User db model to User pydantic schema to omit password data
    Args:
        user: User database model

    Returns:
        User schema for safe transmission
    """
    return schemas.User(
        id=user.id,
        email=user.email,
        username=user.username,
        is_active=user.is_active
    )


pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)


def get_password_hash(password):
    return pwd_context.hash(password)


class SecurityFilter(logging.Filter):
    def filter(self, record):
        return "SECURITY" in record.getMessage()


fh = logging.FileHandler('logs.log', 'a')
fh.setLevel(logging.WARNING)
fh.addFilter(SecurityFilter())
formatter = logging.Formatter('%(asctime)s : %(message)s', '%m/%d/%Y %I:%M:%S %p')
fh.setFormatter(formatter)

logger = logging.getLogger('')
logger.propagate = False
logger.addHandler(fh)
