## Backend
This project is a FastAPI project. Deployed [here](https://fast-api-tanimals.herokuapp.com/docs).


## Dependencies
All dependencies are going to be listed in [requirements.txt](./requirements.txt). 
Important dependencies are going to be listed here for brief description of their uses.
- `FastAPI` - web framework for creating APIs
- `SQLAlchemy` - ORM for database management and queries
- `Pydantic` - type and data validation
- `Uvicorn` - lightning fast server, used for serving this backend API

```shell
# backend folder must be the current working directory
py -m pip install requirements-dev.txt  # windows
python -m pip install requirements-dev.txt  #non-windows

# optional for development dependencies so you can run tests and linting
py -m pip install requirements-dev.txt
```

### University Database Setup (**NEEDED when running on non-university machines**)
Anything that is enclosed by `<>` must be replaced with actual values

**NOTE: If you're using PyCharm Professional Edition, [this](https://ncl.instructure.com/courses/39968/files/5003547)
is the easier way. Make sure that you set the local port, on the SSH Tunnel section, instead of it being dynamic, 
preferably to 3307.**


#### Setting up a database connection with the university databases from non-university machines

A tunnel session must be created first via the command below.
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
SECRET_KEY=<your_secret_key> 
EMAIL_ADDRESS=<a_valid_emaill_address_to_send_emails_from>
EMAIL_PASSWORD=<password_for_EMAIL_ADDRESS>
DB_URL=<valid_database_url_that_python_can_use>  # sqlite:///./team-29.db if you don't have one
TEST_DB_URL=<optional_db_which_uses_sqlite_by_default>
```
This is only possible if you are able to ssh tunnel into the university machine, using an sqlite URL is possible
if you can't access the university database. Just replace the value of `DB_URL` like
```
# db username, password, and name stay the same
DB_URL=sqlite:///./team29.db
```
This will allow sqlalchemy to use `sqlite` instead.


## Running the server.
Make sure that you're running `backend` folder as a project on your IDE/editor (it is the current working directory)
and not the whole `team-29` repo.
```sh
# backend folder **MUST BE ROOT/CURRENT DIRECTORY**

# Non-Windows
python -m uvicorn main:app --host 127.0.0.1 --port 8080 --reload
## or
python main.py  # preferable

# Windows
py -m uvicorn main:app --host 127.0.0.1 --port 8080 --reload
## or
py main.py  # preferable
```
Doing either of the above will serve the API on `http://127.0.0.1:8080`. 
To test if this works, you can go to that link in your browser.

Interactive documentation will be served at `127.0.0.1:8080/docs` endpoint, alternative documentation will be at `/redoc`


### Running Tests
Running tests will require extra dependencies that are not listed at `requirements.txt` 
(Application dependencies must be separate from development dependencies). In your terminal do:
```sh
# install development dependencies first
py -m pip install requirements-dev.txt  # windows
python -m pip install requirements-dev.txt  #non-windows

# after installing run ...
py -m pytest
# or 
python -m pytest
```

### Coding Guidelines (Linting and Formatting)
Check [guidelines](./GUIDELINES.md)

### Resources
[FastAPI Tutorial and Docmentation](https://fastapi.tiangolo.com/tutorial/)
- This includes everything from basic to advanced usage. It also includes 
a background on modern python features such as typehinting and asynchronous programming

[FastAPI Login](https://fastapi-login.readthedocs.io/)
- a fastapi plugin that allows easy management of authentication 
using OAuth2 and authorisation using OAuth2 scopes
