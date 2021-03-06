import FriendList from './components/FriendList/FriendList';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import friends from './data/friends.json';
import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import transactions from './data/transactions';

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
