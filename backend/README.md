## Backend
This project is a FastAPI project.


## Dependencies
All dependencies are going to be listed in [requirements.txt](./requirements.txt). 
Important dependencies are going to be listed here for brief description of their uses.
- `FastAPI` - web framework for creating APIs
- `SQLAlchemy` - ORM for database management and queries
- `Pydantic` - type and data validation
- `Uvicorn` - lightning fast server, used for serving this backend API
- `python-dotenv` - used for managing environment variables to keep secrets be secrets


## Usage
```sh
# assuming current directory is .../backend/
python main.py


# if just inside the repository but outside of backend
python backend/main.py
```
Doing either of the above will serve the API on `http:127.0.0.1:8080`. 
To test if this works, you can go to that link in your browser.

Interactive documention will be served at `/docs`, alternative documentation will be at `/redoc`

### Running Tests
Running tests will require extra dependencies that are not listed at `requirements.txt` 
(Application dependencies must be separate from development dependencies). In your terminal do:
```sh
pip install pytest
pip install requests

# after installing run ...
pytest
```

### Resources
[FastAPI Tutorial and Docmentation](https://fastapi.tiangolo.com/tutorial/)
- This includes everything from basic to advanced usage. It also includes 
a background on modern python features such as typehinting and asynchronous programming

[FastAPI Login](https://fastapi-login.readthedocs.io/)
- a fastapi plugin that allows easy management of authentication 
using [JWT](https://jwt.io/introduction) and authorisation using OAuth2 scopes