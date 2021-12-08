import uvicorn
from fastapi import FastAPI

from backend.db import models
from backend.db.database import engine

from backend.routers import users

models.Base.metadata.create_all(bind=engine)
app = FastAPI()

app.include_router(users.router)


@app.get("/")
async def root() -> dict:
    return {"message": "Hello Team 29!"}


if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8080, log_level="info", reload=True)
