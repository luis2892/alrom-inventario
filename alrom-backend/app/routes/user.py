# app/routes/user.py
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database.connection import get_db
from app.models.user import User
from app.schemas.user import UserCreate, UserOut
from app.utils.auth import hash_password, get_current_user

router = APIRouter()

@router.post("/users/create", response_model=UserOut)
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    hashed = hash_password(user.password)
    db_user = User(email=user.email, hashed_password=hashed)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

@router.get("/users/me")
def read_users_me(current_user: str = Depends(get_current_user)):
    return {"user": current_user}

@router.get("/dashboard/data")
def get_dashboard_data(current_user: User = Depends(get_current_user)):
    return {
        "message": f"Hola {current_user.email}, aquí están tus datos del dashboard.",
        "user_id": current_user.id
    }
