## Backend
This project is a FastAPI project.


## Dependencies
All dependencies are going to be listed in [requirements.txt](./requirements.txt). 
Important dependencies are going to be listed here for brief description of their uses.
- `FastAPI` - web framework for creating APIs
- `SQLAlchemy` - ORM for database management and queries
- `Pydantic` - type and data validation
- `Uvicorn` - lightning fast server, used for serving this backend API
~~- `python-dotenv` - used for managing environment variables to keep secrets be secrets~~


## Usage
```sh
# assuming current directory is .../backend/
python main.py


# if just inside the repository but outside of backend
python backend/main.py
```
Doing either of the above will serve the API on `http://127.0.0.1:8080`. 
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

### Coding Guidelines (Linting and Formatting)
Linting will be enforced by [`pylint`](https://pylint.pycqa.org/en/latest/user_guide/run.html) which 
adheres to [PEP8](https://pep8.org/) by default. This means that variable and module names must be in
 `snake_case`, class names must be in `PascalCase`, etc. *everything is in pep8*.


This will be a new development dependency and must be installed.
```sh
pip install pylint
```
Configurations for it will be in [pylintrc](./backend/pylintrc] (which doesn't exist yet) so that 
running `pylint` will be easier and your IDE and can just load it.

We are going to adhere to [Google's style of documentation strings](https://gist.github.com/redlotus/3bc387c2591e3e908c9b63b97b11d24e) 
as it is more modern than reStructuredText and is supported better for FastAPI's autodocumentation.

It is also recommended to add [type hints](https://www.python.org/dev/peps/pep-0484/) to everything as much as possible. 


### Resources
[FastAPI Tutorial and Docmentation](https://fastapi.tiangolo.com/tutorial/)
- This includes everything from basic to advanced usage. It also includes 
a background on modern python features such as typehinting and asynchronous programming

[FastAPI Login](https://fastapi-login.readthedocs.io/)
- a fastapi plugin that allows easy management of authentication 
using OAuth2 and authorisation using OAuth2 scopes
