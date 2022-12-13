import React from 'react';
import ReactDOM from 'react-dom/client';

import user from 'assets/user.json';
import { Profile } from 'components/profile';
// import { Statistics } from 'components/statistics';
// import { FriendList } from 'components/friends';
// import { TransactionHistory } from 'components/transactions';

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
    {/* <Statistics />
    <FriendList />
    <TransactionHistory /> */}
  </React.StrictMode>
);
