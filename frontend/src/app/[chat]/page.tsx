'use client'

import Loader from '@/components/Loader';
import Message from '@/components/Message';
import { socket } from '@/socket';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';

interface MessageType {
  id: string;
  message: string;
  userId: string;
  mentorId: string;
  createdAt: string;
  updatedAt: string;
  user: {
    id: string;
    name: string;
    email: string;
    password: string;
    otp: string;
    upgraded: boolean;
    planType: string;
    planStartDate: string | null;
    planEndDate: string | null;
    createdAt: string;
    updatedAt: string;
  };
}

function Page() {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(true);
  const { chat: receiverId } = useParams();
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFetchMessages = async () => {
    try {
      const data = {
        userId: localStorage.getItem('id'),
        mentorId: receiverId,
      };
      setLoading(true);
      const response = await axios.post('http://localhost:3000/api/messages', data);
      setMessages(response.data.data || []); // Ensure it defaults to an empty array if data is undefined
    } catch (error) {
      console.error(error);
      alert('Unable to fetch the messages');
      setMessages([]); // Set messages to an empty array if an error occurs
    } finally {
      setLoading(false);
      scrollToBottom();
    }
  };

  useEffect(() => {
    handleFetchMessages();
    socket.on('receive-message', (message) => {
      setMessages((prev = []) => [...prev, message]); // Ensure prev defaults to an empty array
      scrollToBottom();
    });

    return () => {
      socket.off('receive-message');
    };
  }, []);

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const messageObject =
      localStorage.getItem('loginAs') === 'mentor'
        ? {
          message: inputText,
          userId: receiverId,
          mentorId: localStorage.getItem('id'),
        }
        : {
          message: inputText,
          userId: localStorage.getItem('id'),
          mentorId: receiverId,
        };

    socket.emit('send-message', receiverId, localStorage.getItem('id'), messageObject);
    setInputText('');
  };

  return (
    <div className="flex flex-col w-full h-screen max-w-md mx-auto bg-gray-900 text-white shadow-lg">
      <div className="flex-grow overflow-y-auto p-4 space-y-4 pb-20">
        {loading ? (
          <Loader />
        ) : messages.length === 0 ? ( // Properly handle empty messages
          <p>No messages found</p>
        ) : (
          messages.map((msg, index) => (
            <Message
              key={index}
              senderId={msg.userId}
              senderName={msg.user.name}
              messageText={msg.message}
              createdAt={msg.createdAt}
            />
          ))
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4 border-t border-gray-700 bg-gray-800 sticky bottom-0">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Type a message..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="flex-grow p-3 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring focus:ring-indigo-500"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSendMessage();
              }
            }}
          />
          <button
            onClick={handleSendMessage}
            className="px-4 py-3 text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-lg shadow-md hover:opacity-90"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
