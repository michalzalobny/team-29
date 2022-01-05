from sqlalchemy.engine import make_url
from starlette.config import Config
from starlette.datastructures import Secret

config = Config("./.env")
db_username = config("DB_USERNAME", default="")
db_password = config("DB_PASSWORD", default="", cast=Secret)
db_name = config("DB_NAME", default="")
secret_key = config("SECRET_KEY")

db_url = config("DB_URL", default="sqlite:///./team-29.db")
db_driver = make_url(db_url).drivername

if "sqlite" not in db_driver:
    db_url = config("DB_URL").format(db_username, str(db_password), db_name)

origins = ["http://localhost:5000",
           "https://localhost:5000",
           "https://team-29.vercel.app/"]
