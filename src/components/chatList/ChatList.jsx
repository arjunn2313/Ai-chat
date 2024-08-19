import React from "react";
import "./chatList.css";
import { Link } from "react-router-dom";

export default function ChatList() {
  return (
    <div className="chatList">
      <span className="title">DASHBOARD</span>
      <Link to="/dashboard">Create a new Chat</Link>
      <Link to="/">Explore AI CHAT</Link>
      <Link to="/">Contact</Link>
      <hr />
      <span className="title">RECENT CHATS</span>
      <div className="list">
        <Link to="/"> My chat</Link>
       
      </div>
      <hr />
      <div className="upgrade">
        <img src="/logo.png" alt="logo" />
        <div className="texts">
          <span>Upgrade to AI CHAT pro</span>
          <span>Get AI-powered conversational experiences</span>
        </div>
      </div>
    </div>
  );
}
