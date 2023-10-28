import React from "react";
import Call from "./assets/phone-call.png";
import VideoCall from "./assets/add-video.png";
import Alert from "./assets/alert.png";
import Messages from "./Messages";
import Input from "./Input";

export default function Chat() {
  return (
    <div className="chat">
      <div className="chatInfo">
        <div className="chatDetail">
          <img
            src="https://images.pexels.com/photos/18372627/pexels-photo-18372627/free-photo-of-rocky-cliff-by-the-sea-during-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className="info">
            <span>Abhi</span>
            <p>Active 6 minutes ago</p>
          </div>
        </div>
        <div className="chatIcons">
          <img src={Call} alt="" />
          <img src={VideoCall} alt="" />
          <img src={Alert} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
}
