import './UserAvatar.component.scss';

interface UserAvatarProps {
  avatar: string;
}

const UserAvatar = ({ avatar }: UserAvatarProps) => {
  return <img className="avatar" src={avatar} alt="" />;
};

export default UserAvatar;
