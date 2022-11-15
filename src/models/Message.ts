import MessageData from './MessageData';
import User from './User';

export default interface Message {
  /** Message ID */
  id: number;
  /** Message owner */
  user: User;
  /** Message data */
  messageData: MessageData;
  /** Message topic */
  topic: string;
}
