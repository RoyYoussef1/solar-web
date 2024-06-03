import React from "react";

const ChatBot = () => {
  return (
    <div className="for-bot" style={{ position: "relative" }}>
      <style>
        {`
          .flex.items-center.justify-center.gap-3.px-4.pb-3.pt-1 {
            display: none;
          }
          .hidder {
            width: 200px;
            height: 35px;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: 9px;
            z-index: 999999999999999999999;
            background: #fff;
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
        <div className="hidder"></div>
    </div>
  );
};

export default ChatBot;
