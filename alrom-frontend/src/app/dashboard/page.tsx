'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function DashboardPage() {
  const router = useRouter()

  useEffect(() => {
    const loggedIn = localStorage.getItem('loggedIn')
    if (loggedIn !== 'true') {
      router.replace('/login')
    }
  }, [router])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">🎉 Bienvenido al Dashboard de ALROM</h1>
      <p className="text-gray-600">Aquí irá el panel de control, reportes, inventario, ventas y más.</p>
    </div>
  )
}
