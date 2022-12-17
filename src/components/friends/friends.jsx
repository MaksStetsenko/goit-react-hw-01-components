import PropTypes from 'prop-types';

import { Box } from 'components/Box';
import {
  FriendListItemStyled,
  StatusStyled,
  AvatarStyled,
  NameStyled,
} from './friends.styled';

export const FriendList = ({ friends }) => {
  return (
      <Box as="ul" p={0} m={0} marginRight="100px">
        {friends.map(({isOnline, avatar, name, id}) => (
          <FriendListItemStyled key={id}>
            <StatusStyled userOnline={isOnline}></StatusStyled>
            <AvatarStyled src={avatar} alt="User avatar" width="48" />
            <NameStyled>{ name }</NameStyled>
          </FriendListItemStyled>
        ))}
      </Box>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf (
 PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }))
};