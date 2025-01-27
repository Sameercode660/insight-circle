'use client'
import axios from "axios";
import React, { useState } from "react";

function AddMentor() {

  const [name, setName] = useState('')
  const [email, setEamil] = useState('')
  const [password, setPassword] = useState('')
  const [profilePicture, setProfilePicture] = useState('')
  const [bio, setBio] = useState('')
  const [expertIn, setExpertIn] = useState('')
  const [mentorType, setMentorType] = useState('FREE')

  async function handleAddMentor() {
    try {
      const data = {
        name, 
        email,
        password,
        profilePicture,
        bio,
        expertIn,
        mentorType
      }

      console.log(data)

      const response = await axios.post('http://localhost:3000/api/admin/add-mentor', data)

      console.log(response.data)

      if(response.data.status == true) {
        alert("Member added successfully")
        setName('')
        setEamil('')
        setPassword('')
      } else {
        alert("Something went wrong in adding member")
      }
    } catch (error) {
      console.log(error)
      alert('Unable to add mentor') 
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-300 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Add Mentor</h2>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter mentor's name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              value={email}
              onChange={(e) => setEamil(e.target.value)}
              type="email"
              placeholder="Enter mentor's email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Profile Picture URL</label>
            <input
              value={profilePicture}
              onChange={(e) => setProfilePicture(e.target.value)}
              type="text"
              placeholder="Enter profile picture URL"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Enter a short bio"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Expertise</label>
            <input
            value={expertIn}
            onChange={(e) => setExpertIn(e.target.value)}
              type="text"
              placeholder="Enter expertise areas"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Mentor Type</label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={mentorType}
              onChange={(e) => setMentorType(e.target.value)}
            >
              <option value="FREE">FREE</option>
              <option value="PAID">PAID</option>
            </select>
          </div>

          <button
            onClick={handleAddMentor}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg shadow-lg"
          >
            Add Mentor
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddMentor;
