import React, { useState, useEffect, useRef } from 'react';
import { Meteor } from 'meteor/meteor';
import Message from './Message';

import '../stylesheets/chat.less';

export default function Chat(props) {
  const { messages, currentUserId } = props;
  const [message, setMessage] = useState('');
  const chatContainer = useRef(null);

  useEffect(() => {
    chatContainer.current.scrollTop = chatContainer.current.scrollHeight;
  }, [messages]);

  function sendMessage(ev) {
    ev.preventDefault();
    if(!message.trim()) {
      return;
    }

    Meteor.call('messages.insert', message);
    setMessage('');
  }

  return (
    <div className="chat-container" ref={chatContainer}>
      <div>
        {messages.map(message => (
          <Message
            {...message} 
            key={message._id} 
            currentUser={currentUserId}
          />))}
      </div>
      <form>
        <input 
          style={{width: "calc(100% - 140px)"}}
          type="text" 
          value={message} 
          onChange={ev => setMessage(ev.target.value)}
        />
        <button onClick={sendMessage}>SEND</button>
      </form>
    </div>
  );
};
