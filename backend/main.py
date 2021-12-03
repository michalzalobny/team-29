import uvicorn
from fastapi import FastAPI

from backend.db import models
from backend.db.database import engine

models.Base.metadata.create_all(bind=engine)
app = FastAPI()


@app.get("/")
async def root() -> dict:
    return {"message": "Hello Team 29!"}


if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8080, log_level="info", reload=True)
