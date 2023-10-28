import React from "react";
import Message from "./Message";

export default function Messages() {
  return (
    <div className="messages">
      <Message
        messageContent={
          "Hello, I just got my Amazon order shipped and I'm very happy about that."
        }
        sender={true}
      />
      <Message messageContent={"That is indeed great news! Happy for you"} />
      <Message messageContent={"Thanks!"} sender={true} />
      <Message
        messageContent={
          "Hello, I just got my Amazon order shipped and I'm very happy about that."
        }
        sender={true}
      />
      <Message messageContent={"That is indeed great news! Happy for you"} />
      <Message messageContent={"Thanks!"} sender={true} />
    </div>
  );
}
