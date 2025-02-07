import Message from "./Message";


const MessageList = ({ messages }: any) => {
    return (
      <div className="space-y-3 w-full">
        {messages.map((msg: any, index: any) => (
          <Message
            key={index}
            senderId={msg.senderId}
            senderName={msg.senderName}
            messageText={msg.messageText}
            createdAt={msg.createdAt}
          />
        ))}
      </div>
    );
  };

  export default MessageList