from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Configuración de la conexión
# Formato: "postgresql://usuario:contraseña@host:puerto/nombre_basedatos"
SQLALCHEMY_DATABASE_URL = "postgresql://postgres:123456@localhost:5432/alromdb"

# Crear el motor de conexión
engine = create_engine(SQLALCHEMY_DATABASE_URL)

# Crear sesión para interactuar con la base de datos
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base para los modelos
Base = declarative_base()
