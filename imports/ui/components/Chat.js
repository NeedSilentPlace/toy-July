import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import Message from './Message';

export default function Chat(props) {
  const { messages, currentUser } = props;
  const [message, setMessage] = useState('');
  console.log('here', props)
  function sendMessage(ev) {
    ev.preventDefault();

    Meteor.call('messages.insert', message);
    setMessage('');
  }

  return (
    <div className="chat-container">
      <div>
        {messages.map(message => (
          <Message
            {...message} 
            key={message._id} 
            currentUser={currentUser}
          />))}
      </div>
      <form>
        <input 
          type="text" 
          value={message} 
          onChange={ev => setMessage(ev.target.value)}
        />
        <button onClick={sendMessage}>SEND</button>
      </form>
    </div>
  );
};
