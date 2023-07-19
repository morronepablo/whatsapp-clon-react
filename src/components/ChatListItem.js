import React from "react";
import "./ChatListItam.css";

function ChatListItem({ onClick, active, data }) {
  return (
    <div className={`chatListItem ${active ? "active" : ""}`} onClick={onClick}>
      <img className="chatListItem--avatar" src={data.image} alt="Avatar" />
      <div className="chatListItem--lines">
        <div className="chatListItem--line">
          <div className="chatListItem--name">{data.title}</div>
          <div className="chatListItem--date">19:00</div>
        </div>
        <div className="chatListItem--line">
          <div className="chatListItem--lastMsg">
            <p>
              Hola, todo bien, cuando puedas venite con tu hermana y tu mama que
              te estamos esperando...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatListItem;
