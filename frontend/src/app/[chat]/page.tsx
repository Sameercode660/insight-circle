'use client'

import { socket } from '@/socket'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function page() {
  const [message, setMessage] = useState("")
  
  const {chat: reciverId} = useParams()

  useEffect(() => {
    socket.on("receive-message", (sender, reciver, message) => {
      console.log(sender, reciver, message)
    })
  }, [])


  function handleSendMessage() {
    const messageObject = {
        message,
        userId: localStorage.getItem('id'),
        mentorId: reciverId
    }
    socket.emit("send-message", reciverId, messageObject)
  }
  return (
    <>

        <input type="text" name="" id="" className='text-black' value={message} onChange={(e) => {
            setMessage(e.target.value)
        }}/>
        <button onClick={handleSendMessage}>Send</button>
    </>
  )
}

export default page