import React from "react";

export default function Message({ messageContent, sender }) {
  return (
    <div className={`message ${sender ? "owner" : ""}`}>
      <div className="messageInfo">
        <img
          src="https://images.pexels.com/photos/18372627/pexels-photo-18372627/free-photo-of-rocky-cliff-by-the-sea-during-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div className="messageContent">
        <p>{messageContent}</p>
        <span>6 minutes ago</span>
      </div>
    </div>
  );
}
