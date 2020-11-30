import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';
import defaultAvatar from '../default-avatar.jpg';

function FriendListItem({
  avatar = defaultAvatar,
  name = 'Не известно',
  isOnline,
}) {
  return (
    <li className={s.item}>
      <span
        className={
          isOnline ? `${s.status} ${s.isOnline}` : `${s.status} ${s.isOffline}`
        }
      ></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
