import PropTypes from 'prop-types';

import { Box } from '../Box';
import {
  TitleStyled,
  StatItemStyled,
  LabelStyled,
  PercentageStyled,
} from './statistics.styled';

export const Statistics = ({ title, stats }) => {
const statLength = stats.length;

  return (
    <Box
      as="section"
      boxShadow="standart"
      borderRadius="standart"
      overflow="hidden"
      width="350px"
      height="180px"
      marginBottom="100px"
      marginRight="100px"
      >
      {title && <TitleStyled>{title}</TitleStyled>}

      <Box as="ul"
        m={0}
        p={0}
        display="flex"
        justifyContent="space-between"
        fontWeight="bold">
        {stats.map(({ id, label, percentage}) => (
          <StatItemStyled
            key={id}
            statLength={statLength}
          >
            <LabelStyled>{label}</LabelStyled>
            <PercentageStyled>{percentage}%</PercentageStyled>
          </StatItemStyled>
        ))}
      </Box>
    </Box>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
