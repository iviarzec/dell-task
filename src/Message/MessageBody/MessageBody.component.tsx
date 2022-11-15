import Message from '../../models/Message';
import UserInfo from '../../UserInfo/UserInfo.component';
import MessageContent from '../MessageContent/MessageContent.component';
import MessageFooter from '../MessageFooter/MessageFooter.component';

import './MessageBody.component.scss';

interface MessageBody {
  message: Message;
}

const MessageBody = ({ message }: MessageBody) => {
  return (
    <div className="message-body-container">
      <UserInfo user={message.user} />
      <div className="message-content-container">
        <MessageContent messageData={message.messageData} />
        <MessageFooter signature={message.user.signature} />
      </div>
    </div>
  );
};

export default MessageBody;
