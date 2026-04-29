import { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Button } from '../components/ui/Button';
import './ChatRoom.css';

export const ChatRoom = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hey guys", sender: "me" },
    { id: 2, text: "Hew; ts how can hare liive to there?", sender: "partner" },
    { id: 3, text: "What it's your message", sender: "me" },
    { id: 4, text: "Fonsopote in nnte mestages", sender: "partner" },
    { id: 5, text: "How users otaoring you?", sender: "me" },
    { id: 6, text: "You're the mess.", sender: "partner" },
  ]);
  
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    setMessages([...messages, { 
      id: Date.now(), 
      text: inputValue, 
      sender: "me" 
    }]);
    setInputValue('');
  };

  return (
    <div className="app-container">
      <Header />
      
      <main className="chat-main">
        <div className="messages-area">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`message-wrapper ${msg.sender === 'me' ? 'message-right' : 'message-left'}`}
            >
              <div className={`message-bubble ${msg.sender === 'me' ? 'bubble-me' : 'bubble-partner'}`}>
                {msg.text}
              </div>
            </div>
          ))}
          
          <div className="typing-indicator">
            <span className="dot"></span> Typing...
          </div>
        </div>

        <div className="chat-input-area">
          <input 
            type="text" 
            className="chat-input" 
            placeholder="Type a message..." 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <div className="chat-controls">
            <Button onClick={handleSendMessage}>Send</Button>
            <button className="icon-btn">🎙️</button>
            <button className="icon-btn">📹</button>
          </div>
        </div>
      </main>
    </div>
  );
};