import styled from 'styled-components';

export const FriendListItemStyled = styled.li`
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[5]}px;
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: ${p => p.theme.fontSizes.xl};
  background-color: ${p => p.theme.colors.friendList};
  border-radius: ${p => p.theme.radii.standart};
  box-shadow: ${p => p.theme.shadows.standart}${p => p.theme.colors.shadow};
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]}px;
  }
`;

export const StatusStyled = styled.span`
  display: inline-block;
  width: 15px;
  height: 15px;
  margin-right: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.rounded};
  background-color: ${({ userOnline }) =>
    userOnline
      ? p => p.theme.colors.friendListOnlineStatus
      : p => p.theme.colors.friendListOfflineStatus};
`;

export const AvatarStyled = styled.img`
  margin-right: ${p => p.theme.space[4]}px;
`;

export const NameStyled = styled.span`
  margin: ${p => p.theme.space[0]}px;
`;
