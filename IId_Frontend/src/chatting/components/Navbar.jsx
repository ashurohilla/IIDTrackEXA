import React from "react";
import Setting from "./assets/setting.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="user">
        <img
          src="https://images.pexels.com/photos/18372627/pexels-photo-18372627/free-photo-of-rocky-cliff-by-the-sea-during-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="info">
          <span>Abhi</span>
          <p>Web Developer</p>
        </div>
        <button>
          <img src={Setting} alt="" />
        </button>
      </div>
    </div>
  );
}
