import React from 'react';
import ReactDOM from 'react-dom/client';

import user from 'assets/user.json';
import statistics from 'assets/data.json';
import friends from 'assets/friends.json';
import transactions from 'assets/transactions.json';

import { Profile } from 'components/profile/profile';
import { Statistics } from 'components/statistics/statistics';
import { FriendList } from 'components/friends/friends';
import { TransactionHistory } from 'components/transactions/transactions';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics stats={statistics} />
    <FriendList friends={friends} />
    <TransactionHistory transactions={transactions} />
  </React.StrictMode>
);
