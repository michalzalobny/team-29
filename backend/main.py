import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from db.database import engine, Base
from routers import users, auth
from settings import origins

Base.metadata.create_all(bind=engine)
app = FastAPI()

app.include_router(users.router)
app.include_router(auth.router)

app.add_middleware(CORSMiddleware,
                   allow_origins=origins,
                   allow_credentials=True,
                   allow_methods=["*"],
                   allow_headers=["*"]
                   )


@app.get("/")
async def root() -> dict:
    return {"message": "Hello Team 29!"}


if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8080, log_level="info", reload=True)
