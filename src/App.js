import FriendList from './components/FriendList';
import friends from './friends.json';

export default function App() {
  return (
    <div>
      <FriendList friends={friends} />,
    </div>
  );
}
