import { Profile } from './components/Profile/Profile';
import user from './data/user.json';
import { Statistics } from './components/Statistics/Statistics';
import data from './data/data.json';
import { FriendList } from './components/FriendList/FriendList';
import friends from './data/friends.json';
import { TransactionHistory } from './components/TransactionHistory/TransactionHistory';
import transactions from './data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '50px',
        fontSize: '40px',
        color: '#010101',
      }}
    >
      React homework by Anatoliia Riabchenko
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
