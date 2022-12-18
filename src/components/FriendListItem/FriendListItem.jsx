import PropTypes from 'prop-types';

import {
  FriendListItemStyled,
  StatusStyled,
  AvatarStyled,
  NameStyled,
} from './FriendListItem.styled';

export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <FriendListItemStyled>
      <StatusStyled userOnline={isOnline}></StatusStyled>
      <AvatarStyled src={avatar} alt="User avatar" width="48" />
      <NameStyled>{name}</NameStyled>
    </FriendListItemStyled>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
