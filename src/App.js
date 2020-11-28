import FriendListItem from './components/FriendListItem';
import friends from './friends.json';

export default function App() {
  return (
    <div>
      <FriendListItem friends={friends} />
    </div>
  );
}
