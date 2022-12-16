import PropTypes from 'prop-types';

import { Box } from '../Box';
import {AvatarStyled,
  NameStyled,
  TagStyled,
  LocationStyled,
  StatsElementStyled,
  LabelStyled,
  QuantityStyled,} from './profile.styled'

export const Profile = ({
  avatar,
  username,
  tag,
  locations,
  stats: { followers, views, likes },
}) => {
  return (
    <Box
    boxShadow="standart"
      textAlign="center"
      backgroundColor="secondary"
      borderRadius="standart"
      overflow="hidden"
      width="300px"
      height="100%"
      marginRight="100px">
      <Box p={5}>
        <AvatarStyled src={avatar} alt={username}/>
        <NameStyled>{username}</NameStyled>
        <TagStyled>@{tag}</TagStyled>
        <LocationStyled>{locations}</LocationStyled>
      </Box>

      <Box as="ul">
        <StatsElementStyled>
          <Box>
            <LabelStyled>Followers</LabelStyled>
            <QuantityStyled>{followers}</QuantityStyled>
          </Box>
        </StatsElementStyled>
        <StatsElementStyled>
          <Box>
            <LabelStyled>Views</LabelStyled>
            <QuantityStyled>{views}</QuantityStyled>
          </Box>
        </StatsElementStyled>
        <StatsElementStyled>
          <Box>
            <LabelStyled>Likes</LabelStyled>
            <QuantityStyled>{likes}</QuantityStyled>
          </Box>
        </StatsElementStyled>
      </Box>
    </Box>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
