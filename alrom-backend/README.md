# 🧠 ALROM - Backend

Backend desarrollado con **FastAPI** y **PostgreSQL** para el sistema de inventario ALROM.

---

## 🚀 Requisitos

- Python 3.10 o superior
- PostgreSQL instalado localmente
- Virtualenv (`python -m venv env`)

---

## ⚙️ Instalación y configuración

```bash
# Clona el repositorio
git clone https://github.com/luis2892/alrom-inventario.git

# Entra a la carpeta del backend
cd alrom-inventario/alrom-backend

# Crea y activa el entorno virtual
python -m venv env
env\Scripts\activate  # En Windows

# Si te aparece error de permisos, ejecuta PowerShell como administrador y corre:
# Set-ExecutionPolicy RemoteSigned

# Instala las dependencias
pip install -r requirements.txt


# 🛠️ Configurar base de datos PostgreSQL
Crea una base de datos llamada: alromdb

Puedes usar pgAdmin o terminal

# Asegúrate de actualizar config.py con tus credenciales

# ▶️ Levantar el servidor
uvicorn app.main:app --reload
Abre en tu navegador:
👉 http://localhost:8000/docs

