import uvicorn
from fastapi import FastAPI

# from db import models
from db.database import engine, Base

from routers import users

Base.metadata.create_all(bind=engine)
app = FastAPI()

app.include_router(users.router)


@app.get("/")
async def root() -> dict:
    return {"message": "Hello Team 29!"}


if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8080, log_level="info", reload=True)
