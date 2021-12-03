from starlette.config import Config
from starlette.datastructures import Secret


config = Config("backend/.env")
db_username = config("DB_USERNAME")
db_password = config("DB_PASSWORD", cast=Secret)
db_name = config("DB_NAME")
