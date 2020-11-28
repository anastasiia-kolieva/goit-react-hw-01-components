import PropTypes from 'prop-types';
import defaultAvatar from './default-avatar.jpg';

function FriendListItem({
  avatar = defaultAvatar,
  name = 'Не известно',
  isOnline,
}) {
  return (
    <li className="item">
      <span className="status">{isOnline ? 'Онлайн' : 'Офлайн'}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
