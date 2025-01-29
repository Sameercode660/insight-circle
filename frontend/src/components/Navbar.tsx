'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {

  const router = useRouter()


  return (
    <nav className="bg-gray-900 text-white p-4 flex items-center justify-between shadow-lg">
      {/* Left Section */}
      <div className="flex items-center space-x-8">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-10 w-auto"
        />
      </div>

      {/* Center Section */}
      <div className="flex items-center space-x-8">
        <button className="text-lg font-semibold hover:text-gray-300" onClick={() => {
          router.push('/')
        }}>Home</button>
        <button  className="text-lg font-semibold hover:text-gray-300"
        onClick={() => {
          router.push('/services')
        }}
        >Services</button>
        <button  className="text-lg font-semibold hover:text-gray-300"
        onClick={() => {
          router.push('/about')
        }}
        >About</button>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-xl px-4 py-2" onClick={() => {
          router.push('/auth/login')
        }}>Login</button>
        <button className="bg-green-500 hover:bg-green-600 text-white rounded-xl px-4 py-2" onClick={() => {
          router.push('/auth/signup')
        }}>Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;