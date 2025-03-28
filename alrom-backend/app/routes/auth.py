# app/routes/auth.py

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database.connection import get_db
from app.models.user import User
from app.schemas.user import UserLogin
from app.utils.auth import verify_password, create_access_token

router = APIRouter()

@router.post("/auth/login")
def login(user: UserLogin, db: Session = Depends(get_db)):
    db_user = db.query(User).filter(User.email == user.email).first()

    if not db_user:
        raise HTTPException(status_code=404, detail="Usuario no encontrado")

    if not verify_password(user.password, db_user.hashed_password):
        raise HTTPException(status_code=401, detail="Contraseña incorrecta")

    token = create_access_token(data={"sub": db_user.email})
    return {
        "access_token": token,
        "token_type": "bearer"
    }
