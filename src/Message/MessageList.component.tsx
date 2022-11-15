import Message from '../models/Message';
import MessageHeader from './MessageHeader/MessageHeader.component';
import MessageBody from './MessageBody/MessageBody.component';

import './MessageList.component.scss';
import React from 'react';

interface MessageListProps {
  messages: Message[];
}

const MessageList = ({ messages }: MessageListProps) => {
  return (
    <div>
      {messages.map((message) => (
        <div className="msg-container" key={message.id}>
          <MessageHeader header={message.messageData.timestamp} />
          <MessageBody message={message} />
        </div>
      ))}
    </div>
  );
};

export default MessageList;
