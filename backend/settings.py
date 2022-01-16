"""Configurations for the project"""
from pathlib import Path
from fastapi_mail import ConnectionConfig
from sqlalchemy.engine import make_url
from starlette.config import Config
from starlette.datastructures import Secret

config = Config("./.env")
# db_username = config("DB_USERNAME", default="")
# db_password = config("DB_PASSWORD", default="", cast=Secret)
# db_name = config("DB_NAME", default="")
secret_key = config("SECRET_KEY")
email_password = config("EMAIL_PASSWORD")
email_from = config("EMAIL_FROM")

db_url = config("DB_URL", cast=Secret)
db_driver = make_url(str(db_url)).drivername

# if "sqlite" not in db_driver:
#     db_url = config("DB_URL").format(db_username, str(db_password), db_name)

origins = ["http://localhost:3000",
           "https://localhost:3000",
           "http://localhost:5000",
           "https://localhost:5000",
           "https://team-29.vercel.app"]

email_conf = ConnectionConfig(
    MAIL_USERNAME="team29.csc2033",
    MAIL_PASSWORD=email_password,
    MAIL_FROM=email_from,
    MAIL_PORT=587,
    MAIL_SERVER="smtp.gmail.com",
    MAIL_FROM_NAME="TeamAnimals",
    MAIL_TLS=True,
    MAIL_SSL=False,
    USE_CREDENTIALS=True,
    VALIDATE_CERTS=True,
    TEMPLATE_FOLDER=Path(__file__).parent / 'email-templates',
)
