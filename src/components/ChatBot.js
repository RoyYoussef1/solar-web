import React from "react";

const ChatBot = () => {
  return (
    <div>
      <style>
        {`
          .flex.items-center.justify-center.gap-3.px-4.pb-3.pt-1 {
            display: none;
          }
        `}
      </style>
      <iframe
        src="https://www.chatbase.co/chatbot-iframe/woNjAjGr3X_gPzTZeNdbG"
        title="ChatBot"
        width="100%"
        style={{ height: "100%", minHeight: "700px" }}
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default ChatBot;
