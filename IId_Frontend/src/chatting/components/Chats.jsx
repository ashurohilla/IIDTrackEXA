import React from "react";

export default function Chats() {
  return (
    <div className="chats">
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/18372627/pexels-photo-18372627/free-photo-of-rocky-cliff-by-the-sea-during-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="userChatInfo">
          <span>Abhi</span>
          <p>Hello</p>
        </div>
        <div className="badge">
          <span>5</span>
        </div>
      </div>
    </div>
  );
}
