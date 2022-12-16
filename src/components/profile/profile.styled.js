import styled from 'styled-components';

export const AvatarStyled = styled.img`
  display: inline-block;
  width: 150px;
  margin-bottom: 35px;
`;

export const NameStyled = styled.p`
  margin: 0 0 16px 0;
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.primary};
`;

export const TagStyled = styled.p`
  margin: 0 0 14px 0;
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.third};
`;

export const LocationStyled = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  margin: 0px;
  color: ${p => p.theme.colors.third};
`;

export const StatsElementStyled = styled.li`
  flex: 1 1 33.3333%;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  &:not(:last-child) {
    border-right: ${p => p.theme.borders.normal};
    border-right-color: ${p => p.theme.colors.userStatsBorder};
  }
`;

export const LabelStyled = styled.span`
  font-size: ${p => p.theme.fontSizes.m};
  margin-bottom: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.userStatsSocialTag};
  text-transform: capitalize;
`;

export const QuantityStyled = styled.span`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.primary};
`;
