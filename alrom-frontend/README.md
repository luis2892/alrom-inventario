# 🧾 ALROM Frontend – Inventario y Punto de Venta

Frontend del sistema ALROM: Controla tu tienda. Sin complicaciones.  
Desarrollado en **Next.js + TailwindCSS + TypeScript**.

---

## 🚀 ¿Qué hace esta app?

- Muestra la interfaz de inicio de sesión (`/login`)
- Redirige a un dashboard base si el usuario está autenticado (`/dashboard`)
- Simula autenticación usando `localStorage`
- Se conecta a un backend FastAPI en `http://localhost:8000`

---

## 📁 Estructura del proyecto
alrom-frontend/
 ├── public/ # Archivos estáticos
 ├── src/
 │ ├── app/ # Rutas y vistas
 │ │ ├── login/ # Página de inicio de sesión 
 │ │ └── dashboard/ # Dashboard (base) 
 │ ├── components/ # Componentes reutilizables (próximamente) 
 │ ├── assets/ # Imágenes como el logo 
 │ ├── styles/ # (opcional) 
 │ └── utils/ # Funciones auxiliares (próximamente) 
 ├── tailwind.config.js 
 └── tsconfig.json

---

## ⚙️ Requisitos

- Node.js (v18 o superior recomendado)
- npm (v9 o superior)

---

## 🛠️ Instrucciones para correr en local

```bash
# 1. Ir a la carpeta del frontend
cd alrom-frontend

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo
npm run dev

# Abre en tu navegador:
👉 http://localhost:3000/login
---