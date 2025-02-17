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
        <div className="font-semibold mb-1 text-xs">
          {isUser ? "You" : senderName}
        </div>

        {/* Message text */}
        <div className="whitespace-pre-wrap break-words mb-2">{messageText}</div>

        {/* Timestamp */}
        <div
          className={`text-xs text-opacity-80 ${
            isUser ? "text-gray-200" : "text-gray-500"
          } text-right`}
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
