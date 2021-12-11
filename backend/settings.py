from starlette.config import Config
from starlette.datastructures import Secret
from sqlalchemy.engine import make_url


config = Config("./.env")
db_username = config("DB_USERNAME", default="")
db_password = config("DB_PASSWORD", default="", cast=Secret)
db_name = config("DB_NAME", default="")


db_url = config("DB_URL", default="sqlite:///./team-29.db")
db_driver = make_url(db_url).drivername

if "sqlite" not in db_driver:
    db_url = config("DB_URL").format(db_username, str(db_password), db_name)
