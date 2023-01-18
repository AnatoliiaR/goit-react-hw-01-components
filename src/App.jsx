import React from 'react';
import style from '../src/App.module.css';
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
    <div className={style.App}>
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
      <Statistics title="Upload Stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
