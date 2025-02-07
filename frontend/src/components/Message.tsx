import React, { useState } from "react";

const Message = ({ senderId, senderName, messageText, createdAt }: any) => {
    const isUser = senderName === localStorage.getItem('name') ;
    return (
        <div className={`flex justify-center mb-4 px-4`}>
            <div
                className={`max-w-xs p-4 rounded-2xl shadow-lg text-sm relative ${isUser
                        ? "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 text-white"
                        : "bg-gray-100 text-gray-900"
                    }`}
            >
                {/* {isUser == true ? (<div className="font-semibold m<div className="font-semibold mb-1 text-sm text-gray-700">{senderName}</div>b-1 text-sm text-gray-700">{localStorage.getItem('name')}</div>) : ()} */}
                {/* <div className="font-semibold mb-1 text-sm text-gray-700">{senderName}</div> */}
                <div className="whitespace-pre-wrap break-words">{messageText}</div>
                <div
                    className={`text-xs absolute mb-3 ${isUser ? "right-2 text-gray-200" : "right-2 text-gray-500"
                        } mt-2`}
                >
                    {new Date(createdAt).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                    })}
                </div>
            </div>
        </div>
    );
};

export default Message