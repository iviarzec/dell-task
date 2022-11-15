import User from '../models/User';
import UserAvatar from './UserAvatar/UserAvatar.component';

import './UserInfo.component.scss';

interface UserInfoProps {
  user: User;
}

const UserInfo = ({ user }: UserInfoProps) => {
  const joinDate = convertTimestampToDate(user.joinDate);

  return (
    <div className="user-info-container">
      <div className="user-info">
        <div className="user-name">{user.name}</div>
        <UserAvatar avatar={user.avatar} />
        <div>Messages: {user.messagesAmount}</div>
        <div>Rank: {user.rank}</div>
        <div>Join: {joinDate}</div>
      </div>
    </div>
  );
};

function convertTimestampToDate(timestamp: number) {
  const date = new Date(timestamp);
  const day = date.getDay().toString().padStart(2, '0');
  const month = date.getMonth().toString().padStart(2, '0');
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}

export default UserInfo;
