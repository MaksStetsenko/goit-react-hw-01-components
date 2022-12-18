import user from 'assets/user.json';
import statistics from 'assets/data.json';
import friends from 'assets/friends.json';
import transactions from 'assets/transactions.json';

import { Box } from '../Box';

import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { TransactionHistory } from 'components/Transactions/Transactions';
import { FriendList } from 'components/FriendsList/FriendsList';

export const App = () => {
  return (
    <Box
      display="flex"
      padding="50px"
      justifyContent="center"
      alignItems="center"
    >
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
