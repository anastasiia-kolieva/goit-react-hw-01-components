import FriendList from './components/FriendList';
import Profile from './components/Profile';
import friends from './friends.json';
import user from './user.json';

export default function App() {
  return (
    <div>
      <FriendList friends={friends} />,
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </div>
  );
}
