import React from 'react'
import "./DashBoard.css"

export default function DashBoard() {
  return (
    <div className="dashboardPage">
      <div className="texts">
        <div className="logo">
          <img src="logo.png" alt="Logo" />
          <h1>AI CHAT</h1>
        </div>
        <div className="options">
          <div className="option">
            <img src="/chat.png" alt="chat" />
            <span>Create a New Chat</span>
          </div>
          <div className="option">
            <img src="/image.png" alt="chat" />
            <span>Analyze Images</span>
          </div>
          <div className="option">
            <img src="/code.png" alt="chat" />
            <span>Help me with my code</span>
          </div>
        </div>
      </div>
      <div className="formContainer">
        <form >
        <input type="text" placeholder="Enter your question" />
        <button type="submit">
          <img src="/arrow.png" alt="arrow" />
        </button>
        </form>
      </div>
    </div>
  )
}
