'use client'
// 👆 Le dice a Next.js que este archivo se ejecuta del lado del cliente (necesario para usar localStorage, useEffect, etc.)

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
// 👆 useRouter para redireccionar; useState/useEffect para manejar estado y ciclo de vida del componente

export default function DashboardPage() {
  const router = useRouter()
  // Estados internos:
  const [data, setData] = useState<any>(null) // Para guardar los datos del backend
  const [loading, setLoading] = useState(true) // Para mostrar "cargando" mientras espera
  const [error, setError] = useState('') // Para mostrar errores si el token falla
  
  // 🔐 Función de logout:
  const logout = () => {
    localStorage.removeItem('token') // Borramos el token
    router.replace('/login') // Redirigimos al login
  }

  // 🚀 Efecto que se ejecuta al cargar el componente:
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      router.replace('/login') // Si no hay token → nos vamos al login
      return
    }

    // ⬇️ Petición al backend:
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/dashboard/data', {
          headers: {
            Authorization: `Bearer ${token}`, // Enviamos el token en el header como exige FastAPI
          },
        })

        if (!response.ok) {
          throw new Error('Token inválido o expirado') // Capturamos error si el backend lo rechaza
        }

        const json = await response.json() // Si todo va bien, guardamos los datos
        setData(json)
      } catch (err: any) {
        console.error(err)
        setError(err.message)
        localStorage.removeItem('token') // Borramos token por seguridad
        router.replace('/login') // Redirigimos al login
      } finally {
        setLoading(false) // Ocultamos el mensaje de "cargando"
      }
    }

    fetchData()
  }, [router])

  // 👀 Mientras está cargando, mostramos mensaje temporal
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500">Cargando datos del dashboard...</p>
      </div>
    )
  }

  // 👇 Contenido principal del dashboard:
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      {/* Encabezado con botón de logout */}
      <div className="w-full max-w-xl flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard ALROM</h1>
        <button
          onClick={logout}
          className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Cerrar sesión
        </button>
      </div>

      {/* Mostramos error o los datos obtenidos */}
      {error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : (
        <pre className="text-sm bg-gray-100 p-4 rounded w-full max-w-xl overflow-auto">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  )
}
