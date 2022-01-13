import logging
from passlib.context import CryptContext

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
