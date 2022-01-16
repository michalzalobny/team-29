"""Contains the FastAPI application to serve the whole backend"""
import random
import string
import time

import uvicorn
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

from db.database import engine, Base
from routers import users, auth, animals, games
from settings import origins
from utils import logger

Base.metadata.create_all(bind=engine)
app = FastAPI()

app.include_router(users.router)
app.include_router(auth.router)
app.include_router(animals.router)
app.include_router(games.router)

app.add_middleware(CORSMiddleware,
                   allow_origins=origins,
                   allow_credentials=True,
                   allow_methods=["*"],
                   allow_headers=["*"]
                   )


@app.get("/")
async def root() -> dict:
    return {"message": "Hello Team 29!"}


@app.middleware("http")
async def add_process_time_header(request: Request, call_next):
    idem = ''.join(random.choices(string.ascii_uppercase + string.digits, k=6))

    start_time = time.time()

    response = await call_next(request)

    process_time = (time.time() - start_time) * 1000

    logger.info("rid=%s, start request %s path=%s completed_in=%.2f ms status_code=%d",
                idem, request.method, request.url.path, process_time, response.status_code)

    return response


if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8080, log_level="info")
