from conftest import *


def test_read_main(client):
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Hello Team 29!"}


def test_create_user(client):
    response = client.post(
        "/auth/register",
        json={
            "username": "test_user",
            "email": "test_user@email.com",
            "password": "test_user_pass",
        }
    )
    assert response.status_code == 200, response.text

    data = response.json()
    assert "id" in data
    assert data["username"] == "test_user"
    assert data["email"] == "test_user@email.com"
