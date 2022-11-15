import './MessageHeader.component.scss';

interface MessadeHeaderProps {
  header: number;
}

const MessageHeader = ({ header }: MessadeHeaderProps) => {
  return <div className="message-header">{header}</div>;
};

export default MessageHeader;
