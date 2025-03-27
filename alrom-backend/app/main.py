from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import status_test, user # Importaremos esto en el próximo paso

app = FastAPI()

# 🚨 Activar CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # o ["http://localhost:3000"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Registrar rutas
app.include_router(status_test.router)
app.include_router(user.router)

# Puedes añadir más routers aquí conforme crece la app


# Una vez ejecutado una vez, puedes quitarlo. Solo se necesita para crear las tablas si no existen.
# from app.database import Base, engine
# from app.models import user  # Importar el archivo que contiene el modelo

# Base.metadata.create_all(bind=engine)

