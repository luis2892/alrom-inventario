# app/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import user, auth  # importa tus rutas

app = FastAPI(debug=True)

# Activar CORS para el frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Puedes ajustar esto a ["http://localhost:3000"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Registrar rutas
app.include_router(user.router)
app.include_router(auth.router)
