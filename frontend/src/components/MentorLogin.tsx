"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import axios from "axios";

export function MentorLogin() {

  const router = useRouter();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLaoding] = useState(false)

  async function handleMentorLogin() {
    try {
      const data = {
        email,
        password
      }

      if (!email || !password) {
        alert('Anyone field is empty')
        return
      }

      setLaoding(true)
      const response = await axios.post('http://localhost:3000/api/mentor-login', data)
      setLaoding(false)

      console.log(response.data.data)

      if(response.data.status == true) {
          localStorage.setItem('loginAs', 'mentor')
          localStorage.setItem('id', response.data.data.id)
          localStorage.setItem('name', response.data.data.name)
          localStorage.setItem('isLogin', "true")
          localStorage.setItem('email', response.data.data.email)
          window.location.href = '/mentor-section'
      } else {
        alert(response.data.message)
      }
    } catch (error) {
      console.error(error)

      alert('Unable to login as mentor')
    } finally {
      setLaoding(false)
    }
  }

  return (
    <div className="mt-20 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Login as Mentor
      </h2>
      <div className="my-8">
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" value={email} onChange={(e) => {
            setEmail(e.target.value)
          }} />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password" value={password} onChange={(e) => {
            setPassword(e.target.value)
          }} />
        </LabelInputContainer>
        {
          loading === true ?
            (<button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            >
              Loading... &rarr;
              <BottomGradient /> </button>) :
            (<button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              onClick={handleMentorLogin}
            >
              Login &rarr;
              <BottomGradient />
            </button>)

        }

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          <button
            className="flex justify-center relative group/btn space-x-2 items-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            onClick={() => {
              router.push('/auth/signup')
            }}
          >
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Login/Signup as Mentee
            </span>
            <BottomGradient />
          </button>
        </div>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
