import './MessageFooter.component.scss';

interface MessageFooter {
  signature: string;
}

const MessageFooter = ({ signature }: MessageFooter) => {
  return <div className="signature">{signature}</div>;
};

export default MessageFooter;
