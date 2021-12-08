## Backend
This project is a FastAPI project.


## Dependencies
All dependencies are going to be listed in [requirements.txt](./requirements.txt). 
Important dependencies are going to be listed here for brief description of their uses.
- `FastAPI` - web framework for creating APIs
- `SQLAlchemy` - ORM for database management and queries
- `Pydantic` - type and data validation
- `Uvicorn` - lightning fast server, used for serving this backend API

### University Database Setup (**NEEDED when running on non-university machines**)
Anything that is enclosed by `<>` must be replaced with actual values

#### Setting up a database connection
1. ssh into your university linux machine
```shell
ssh <uni_ssh_username>@linux.cs.ncl.ac.uk
```
2. create a configuration file for mysql
```shell
echo "bind-address=0.0.0.0" >> ~/my.cnf
```
You only have to do above once.

Steps below must be repeated when the connection closes.
3. After setting up the configuration file, either logout of the terminal or open a new one and do
```shell
ssh -f <your_ssh_username>@linux.cs.ncl.ac.uk -L 3307:cs-db.ncl.ac.uk:3306 -N
```
This should run a connection that *tunnels* from your machine to the university database **in the background**.
Accessing `127.0.0.1:3307` now points to the university machines and then to the database

### Environment variables (**NEEDED**)
Create a file inside [backend folder](../backend) called `.env` and fill 
(anything that is enclosed by `<>` must be replaced with actual values)
**There must be no space between equal signs `=`**
```
DB_USERNAME=csc2033_team29
DB_PASSWORD=<insert_our_db_password>
DB_NAME=csc2033_team29
DB_URL=mysql+pymysql://{}:{}@127.0.0.1:3307/{}?charset=utf8mb4
```
This is only possible if you are able to ssh tunnel into the university machine, using an sqlite URL is possible
if you can't access the university database. Just replace the value of `DB_URL` like
```
# db username, password, and name stay the same
DB_URL=sqlite://./team29.db"
```
This will allow sqlalchemy to use `sqlite` instead.
## Running the server
```sh
# if just inside the repository but outside of backend
# this is the preferred way

# Non-Windows
python -m uvicorn backend.main:app --host 127.0.0.1 --port 8080 --reload

# Windows
py -m uvicorn backend.main:app --host 127.0.0.1 --port 8080 --reload
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
Configurations for it will be in [pylintrc](../backend/pylintrc) (which doesn't exist yet) so that 
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
