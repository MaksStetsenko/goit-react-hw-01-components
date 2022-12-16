import user from 'assets/user.json';
import statistics from 'assets/data.json';
import friends from 'assets/friends.json';
import transactions from 'assets/transactions.json';

import { Box } from '../Box';

import { Profile } from 'components/profile/profile';
import { Statistics } from 'components/statistics/statistics';
import { FriendList } from 'components/friends/friends';
import { TransactionHistory } from 'components/transactions/transactions';

export const App = () => {
  return (
    <Box display="flex">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
        <Statistics title="Upload stats" stats={statistics} />
        <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </Box>
  );
};
