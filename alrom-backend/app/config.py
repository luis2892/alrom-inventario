# app/config.py

from datetime import timedelta

SECRET_KEY = "alromsupersecretakey123"  # Cambia esto por algo más fuerte en producción
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30
