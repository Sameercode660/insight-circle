'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState, useRef } from 'react';

type OTPInputProps = {
  onSubmit?: (otp: string) => void;
};

const OTPInput: React.FC<OTPInputProps> = () => {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(''));
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    setOtp(newOtp);
  };

  const handleBackspace = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async () => {
    const otpValue = otp.join('');
    if (otpValue.length === 6) {
      setLoading(true)
      const response = await axios.post('http://localhost:3000/api/user/auth/otp-verification', { id: localStorage.getItem('id'), otp: otpValue });
      setLoading(false)
      console.log(response.data);

      if (response.data.status === true) {

        localStorage.setItem('id', response.data.data.id);
        localStorage.setItem('name', response.data.data.name);
        localStorage.setItem('isLogin', "true")
        localStorage.setItem('email', response.data.data.email)
        localStorage.setItem('loginAs', 'student')
        alert('Sign Up Success');
        window.location.href = '/'
      } else {
        alert(response.data.message);
      }
    } else {
      alert('Please enter a valid 6-digit OTP.');
    }
  };

  return (
    <div
      className={`flex items-center justify-center h-screen w-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'
        }`}
    >
      <div className={`shadow-lg rounded-lg p-8 w-96 max-w-full ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <h2 className="text-2xl font-semibold text-center mb-6">Enter OTP</h2>
        <div className="flex items-center justify-center space-x-2 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleBackspace(e, index)}
              ref={(el: any) => (inputRefs.current[index] = el)}
              className={`w-12 h-12 text-center text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
                }`}
            />
          ))}
        </div>
        {
          loading ? (<button
            className={`w-full px-4 py-2 rounded-md focus:outline-none ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'
              } text-white`}
          >
            Loading...
          </button>) : (<button
            onClick={handleSubmit}
            className={`w-full px-4 py-2 rounded-md focus:outline-none ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'
              } text-white`}
          >
            Submit
          </button>)
        }


        <div className="mt-4 text-center">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-sm underline focus:outline-none"
          >
            Toggle {darkMode ? 'Light' : 'Dark'} Mode
          </button>
        </div>
      </div>
    </div>
  );
};

export default OTPInput;