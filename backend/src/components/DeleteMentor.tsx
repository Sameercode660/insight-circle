'use client'
import axios from 'axios'
import React, { useState } from 'react'

function DeleteMentor() {

  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  
  async function handleDeleteMentor(e) {
    e.preventDefault()
    try {
      
      setLoading(true)
      const response = await axios.post('http://localhost:3000/api/admin/delete-mentor', {email})
      setLoading(false)

      console.log(response.data)

      if(response.data.status == true) {
        alert(response.data.message)
      } else {
        alert(response.data.message)
      }
    } catch (error) {
      console.log(error)
      alert('Unable to delete Mentor')
    }
  }
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="w-full max-w-md shadow-lg rounded-2xl bg-white">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Delete Mentor</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
                id="email"
                type="email"
                placeholder="Enter mentor's email"
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button
              onClick={handleDeleteMentor}
              className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md">
              {loading ? "Deleting..." : 'Delete'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DeleteMentor
