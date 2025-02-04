"use client";

import axios from "axios";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";

export function PlaceholdersAndVanishInputDemo() {
  const placeholders = [
    "How can I find the right mentor for my career growth?",
    "What are the key benefits of having a mentor?",
    "How do I establish a strong mentor-mentee relationship?",
    "What should I look for in an ideal mentor?",
    "How can mentorship accelerate my learning and development?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data: any = {
        question: e.target[0].value,
        userName: localStorage.getItem('name'),
        userId: localStorage.getItem('id'),
        email: localStorage.getItem('email'),
      }
      console.log(data)

      const response = await axios.post('http://localhost:3000/api/user/ask-question', data)

      console.log(response.data)

      if(response.data.status === true) {
        alert('Question submitted successfully')
      } else {
        alert('unable to send the question')
      }
    } catch (error) {
      console.log(error);
      alert('unable to send the question')
    }
  };
  return (
    <div className="h-[40rem] flex flex-col justify-center  items-center px-4">
      <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
        Ask Us Anything
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
