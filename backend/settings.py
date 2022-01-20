"""Configurations for the project. Contains everything that are before the program can run."""
from pathlib import Path

from fastapi_mail import ConnectionConfig
from sqlalchemy.engine import make_url
from starlette.config import Config
from starlette.datastructures import Secret

config = Config("./.env")
secret_key = config("SECRET_KEY")

# DATABASE CONFIG
# main database
db_url = config("DB_URL", cast=Secret)
db_driver = make_url(str(db_url)).drivername

# test database
test_db_url = config("TEST_DB_URL", default="sqlite:///./test_db.db")


# EMAIL CONFIG
email_password = config("EMAIL_PASSWORD")
email_address = config("EMAIL_ADDRESS")
email_username = email_address.split("@")[0]

email_conf = ConnectionConfig(
    MAIL_USERNAME=email_username,
    MAIL_PASSWORD=email_password,
    MAIL_FROM=email_address,
    MAIL_PORT=587,
    MAIL_SERVER="smtp.gmail.com",
    MAIL_FROM_NAME="TeamAnimals",
    MAIL_TLS=True,
    MAIL_SSL=False,
    USE_CREDENTIALS=True,
    VALIDATE_CERTS=True,
    TEMPLATE_FOLDER=Path(__file__).parent / 'email-templates',
)


origins = [
    "http://localhost:3000",
    "https://localhost:3000",
    "http://localhost:5000",
    "https://localhost:5000",
    "https://team-29.vercel.app",
]
