import MessageData from '../../models/MessageData';

import './MessageContent.component.scss';

interface MessageContentProps {
  messageData: MessageData;
}

const MessageContent = ({ messageData }: MessageContentProps) => {
  return <div className="message-content">{messageData.body}</div>;
};

export default MessageContent;
