from db import schemas, models


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
