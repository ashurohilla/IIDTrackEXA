import React from "react";
import Smily from "./assets/smiling-face.png";
import Attchment from "./assets/attachment.png";
import Send from "./assets/back-arrow.png";

export default function Input() {
  return (
    <div className="input">
      <img
        className="senderImg"
        src="https://images.pexels.com/photos/18372627/pexels-photo-18372627/free-photo-of-rocky-cliff-by-the-sea-during-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <div className="verticalLine"></div>
      <input type="text" placeholder="Your message here..." />
      <div className="send">
        <img src={Smily} alt="" />
        <input style={{ display: "none" }} type="file" id="file" />
        <label htmlFor="file">
          <img src={Attchment} alt="" />
        </label>
        <button>
          Send
          <img src={Send} alt="" />
        </button>
      </div>
    </div>
  );
}
