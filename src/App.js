import FriendList from './components/FriendList';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import TransactionHistory from './components/TransactionHistory';
import friends from './friends.json';
import user from './user.json';
import statisticalData from './statistical-data.json';
import transactions from './transactions';

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
      <Statistics title="Upload stats" stats={statisticalData} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
}
