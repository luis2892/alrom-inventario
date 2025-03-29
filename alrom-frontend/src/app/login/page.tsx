'use client'
import Image from 'next/image'
import logo from '@/assets/logo_blanco.png'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage('')

    try {
      const response = await fetch('http://localhost:8000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.detail || 'Credenciales incorrectas')
      }

      localStorage.setItem('token', data.access_token)
      setMessage('✅ Login exitoso')
      router.push('/dashboard')
    } catch (error: any) {
      console.error('Error:', error)
      setMessage('❌ Error al iniciar sesión: ' + error.message)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <Image src={logo} alt="Logo ALROM" width={120} height={120} />
      <h1 className="text-2xl font-bold mt-4 text-gray-800">Bienvenido a ALROM</h1>
      <p className="text-sm text-gray-500">Inicia sesión para continuar</p>

      <form onSubmit={handleSubmit} className="mt-6 w-full max-w-sm space-y-4">
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-md"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Iniciar sesión
        </button>

        {message && (
          <div className="mt-2 text-sm text-center text-gray-600">
            {message}
          </div>
        )}
      </form>
    </div>
  )
}
