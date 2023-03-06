// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
// import styled from 'styled-components';
// import { Box } from './Box';

// const Text = styled.p`
//   color: ${p => p.theme.colors.text};
//   background: ${p => p.theme.colors.accent};
//   font-size: ${p => p.theme.fontSizes.xl};
// `;

import { Container } from './Container';

import { Profile } from './Profile';
import user from '../configs/user';

import { Statistics } from './Statistics';
import data from '../configs/data';

import { FriendList } from './FriendList';
import friends from '../configs/friends';

import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../configs/transactions';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends}></FriendList>
      <TransactionHistory items={transactions}></TransactionHistory>
    </Container>
  );
};
