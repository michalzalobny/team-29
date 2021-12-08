from starlette.config import Config
from starlette.datastructures import Secret
from sqlalchemy.engine import make_url


config = Config("backend/.env")
db_username = config("DB_USERNAME")
db_password = config("DB_PASSWORD", cast=Secret)
db_name = config("DB_NAME")

db_driver = make_url(config("DB_URL")).drivername

if "sqlite" in db_driver:
    db_url = config("DB_URL")
else:
    db_url = config("DB_URL").format(db_username, str(db_password), db_name)
