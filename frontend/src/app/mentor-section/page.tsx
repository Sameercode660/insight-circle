'use client'

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Loader from "@/components/Loader";
import { socket } from '@/socket'

const UserCard = ({ id, name }: { id: string, name: string }) => {

    const router = useRouter()

    useEffect(() => {
        socket.on("user-joined", (userId) => {
            console.log(userId)
        })
    }, [])

    function handleJoinUser() {
        socket.emit("join-user", id)
        router.push(`/${id}/${name}`)
    }


    const initials = name.charAt(0).toUpperCase();

    return (
        <div className="flex flex-col items-center justify-center w-72 h-96 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-2xl shadow-lg p-6 text-white space-y-4">
            <div className="w-36 h-36 bg-white text-4xl text-purple-700 font-bold flex items-center justify-center rounded-full">
                {initials}
            </div>
            <h2 className="text-2xl font-semibold">{name}</h2>
            <button
                onClick={handleJoinUser}
                className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:opacity-90"
            >
                Chat
            </button>
        </div>
    );
};

const page = () => {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    async function handleFetchUsers() {
        try {

            const response = await axios.get('http://localhost:3000/api/mentee-list')
            setLoading(false)

            console.log(response.data)
            setUsers(response.data.data)
        } catch (error) {
            console.error(error)
            alert('Unable to fetch the user')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        handleFetchUsers()
    }, [])
    return (
        <div className="min-h-screen bg-gradient-to-tr from-gray-800 via-gray-900 to-black flex flex-wrap items-center justify-center gap-8 p-8">
            {
                loading === true ? <Loader></Loader> : (users.length === 0 ? (<div>No any mentee is found</div>) : (users.map((user: any) => (
                    <UserCard key={user.id} id={user.id} name={user.name} />
                ))))
            }
        </div>
    );
};

export default page;