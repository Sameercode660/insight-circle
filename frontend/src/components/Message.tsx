import React from "react";

const Message = ({
  senderId,
  senderName,
  messageText,
  createdAt,
}: any) => {
  const isUser = senderId === localStorage.getItem("id");

  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4 px-4`}
    >
      <div
        className={`max-w-xs p-4 rounded-3xl shadow-lg text-sm relative ${
          isUser
            ? "bg-gradient-to-br from-pink-500 via-purple-500 to-yellow-500 text-white"
            : "bg-gray-100 text-gray-900"
        }`}
      >
        {/* Sender's name */}
        <div className="font-semibold mb-2 text-xs">
          {isUser ? "You" : senderName}
        </div>

        {/* Message text */}
        <div className="whitespace-pre-wrap break-words">{messageText}</div>

        {/* Timestamp */}
        <div
          className={`text-xs absolute ${
            isUser ? "right-2 text-gray-300" : "left-2 text-gray-500"
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

export default Message;
