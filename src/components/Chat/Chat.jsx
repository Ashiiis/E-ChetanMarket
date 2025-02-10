import React, { useState } from 'react';
import './Chat.css';
import users from './data2';

const ChatPage = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [showRightSection, setShowRightSection] = useState(false); // For small screens

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setShowRightSection(true); // Show the right section on small screens
  };

  const handleBackClick = () => {
    setShowRightSection(false); // Go back to the left section on small screens
  };

  return (
    <div className="chat-page">
      {/* Left Section */}
      <div className={`left-section ${showRightSection ? 'hide' : ''}`}>
        {users.map((user) => (
          <div
            key={user.id}
            className={`user-card ${selectedUser?.id === user.id ? 'active' : ''}`}
            onClick={() => handleUserClick(user)}
          >
            <div className="user-profile">
              <div className="user-avatar">{user.name[0]}</div>
            </div>
            <div className="user-info">
              <h4>{user.name}</h4>
              <p>{user.lastMessage}</p>
              <small>{user.date}</small>
            </div>
          </div>
        ))}
      </div>

      {/* Right Section */}
      <div className={`right-section ${showRightSection ? '' : 'hide'}`}>
        {selectedUser ? (
          <div className="chat-box">
            {/* Back button for small screens */}
            <button className="back-button" onClick={handleBackClick}>
              Back
            </button>
            <h2>Place Your Order</h2>
            <div className="chat-messages">
              <p className="placeholder">Chat messages will appear here</p>
            </div>
            <div className="message-bar">
              <input type="text" placeholder="Type your message..." />
              <button>Send</button>
            </div>
          </div>
        ) : (
          <div className="chat-placeholder">
            <p>Select a user to start a chat</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatPage;
