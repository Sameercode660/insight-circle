'use client'
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleLogin() {
    try {
      setLoading(true)
      const response = await axios.post('http://localhost:3000/api/admin/login', {email, password})
      setLoading(false)

      console.log(response.data)

      if(response.data.status == true) {
        localStorage.setItem('admin-id', response.data.data.id)
        localStorage.setItem('admin-name', response.data.data.name)
        router.push('./admin-panel')
      } else {
        alert(response.data.message)
      }
    } catch (error) {
      console.log(error)
      alert('Unable to login')
    }
  }
 
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-blue-300">
      <div className="w-full max-w-sm shadow-lg rounded-2xl p-6 bg-white">
        <div>
          <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">
            Login
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              onClick={handleLogin}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;