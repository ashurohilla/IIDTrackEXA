import React, { useState } from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import ChatUsers from "./ChatUsers";
export default function Sidebar() {
  const [selected, setSelected] = useState("all");

  return (
    <div className="sidebar">
      <Navbar />
      <Search />

      <div className="chatting">
        <p>Chats</p>
        <div className="chatType">
          <span
            className={`${selected === "all" ? "selected" : ""}`}
            onClick={() => setSelected("all")}
          >
            All
          </span>
          <span
            className={`${selected === "unread" ? "selected" : ""}`}
            onClick={() => setSelected("unread")}
          >
            Unread
          </span>
          <span
            className={`${selected === "archived" ? "selected" : ""}`}
            onClick={() => setSelected("archived")}
          >
            Archived
          </span>
        </div>
      </div>

      <ChatUsers />
    </div>
  );
}
