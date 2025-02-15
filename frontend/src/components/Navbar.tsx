'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Navbar = () => {

  const router = useRouter()
  const [isLogin, setIsLogin] = useState(false); 
  const [userName, setUserName] = useState('');

  // Synchronize state with localStorage
  useEffect(() => {
    const loginStatus = localStorage.getItem('isLogin') === 'true';
    setIsLogin(loginStatus);
    setUserName(localStorage.getItem('name') || '');
  }, []);

  const handleLogout = () => {
    localStorage.setItem('isLogin', 'false');
    localStorage.setItem('name', '');
    localStorage.setItem('id', '');
    setIsLogin(false); // Update state directly
    router.push('/auth/login');
  };


  return (
    <nav className="bg-gray-900 text-white p-4 flex items-center justify-between shadow-lg">
      {/* Left Section */}
      <div className="flex items-center space-x-8 ml-10">
        <img
          src="https://img.eselt.de/img/17221350_RK2awlKhubuVR2dA/ad.jpg"
          alt="Logo"
          className="h-16 w-auto rounded-xl"
        />
      </div>

      {/* Center Section */}
      <div className="flex items-center space-x-8">
        <button className="text-lg font-semibold hover:text-gray-300" onClick={() => {
          router.push('/')
        }}>Home</button>
        <button className="text-lg font-semibold hover:text-gray-300"
          onClick={() => {
            router.push('/services')
          }}
        >Services</button>
        <button className="text-lg font-semibold hover:text-gray-300"
          onClick={() => {
            router.push('/about')
          }}
        >About</button>
      </div>

      {/* Right Section */}
      {
        isLogin == false ? (<div className="flex items-center space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-xl px-4 py-2" onClick={() => {
            router.push('/auth/login')
          }}>Login</button>
          <button className="bg-green-500 hover:bg-green-600 text-white rounded-xl px-4 py-2" onClick={() => {
            router.push('/auth/signup')
          }}>Sign Up</button>
        </div>) : (<div className="flex items-center space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-xl px-4 py-2">{userName}</button>
          <button className="bg-green-500 hover:bg-green-600 text-white rounded-xl px-4 py-2" onClick={handleLogout}>Logout</button>
        </div>
        )
      }
    </nav>
  );
};

export default Navbar;