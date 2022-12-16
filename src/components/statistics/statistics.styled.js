import styled from 'styled-components';

export const TitleStyled = styled.h2`
  margin: ${p => p.theme.space[0]};
  padding: ${p => p.theme.space[5]}px;
  font-size: ${p => p.theme.fontSizes.xl};
  letter-spacing: ${p => p.theme.letterSpacings.stats};
  font-weight: ${p => p.theme.fontWeights.normal};
  text-transform: uppercase;
  text-align: center;
  color: ${p => p.theme.colors.third};
  background-color: ${p => p.theme.colors.secondary};
`;

export const StatItemStyled = styled.li`
  width: ${p => getItemWidth(p.statLength)};
  padding: ${p => p.theme.space[4]}px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: ${p => p.theme.colors.statisticsTextColor};
  background-color: ${getRandomHexColor};
`;

export const LabelStyled = styled.span`
  width: 100%;
  margin-bottom: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.s};
  text-align: center;
`;

export const PercentageStyled = styled.span`
  width: 100%;
  font-size: ${p => p.theme.fontSizes.l};
  text-align: center;
`;

function getItemWidth(elementsQuantity) {
  return `${(100 / elementsQuantity).toFixed(3)}%`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
