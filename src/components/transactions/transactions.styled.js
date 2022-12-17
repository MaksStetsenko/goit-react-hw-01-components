import styled from 'styled-components';

export const TableStyled = styled.table`
  width: 25%;
  font-size: ${p => p.theme.fontSizes.m};
  border-collapse: collapse;
  background-color: ${p => p.theme.colors.secondary};
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.tableBodySeparator};
  box-shadow: ${p => p.theme.shadows.standart};
`;

export const TableBodyStyled = styled.tbody`
  text-align: center;
  & tr {
    &:nth-of-type(even) {
      background-color: ${p => p.theme.colors.tableEvenRowBG};
    }
    &:nth-of-type(odd) {
      background-color: ${p => p.theme.colors.tableOddRowBG};
    }
  }
`;

export const TableHeadCellStyled = styled.th`
  padding: ${p => p.theme.space[3]}px;
  width: 33.333%;
  &:not(:last-child) {
    border-right: ${p => p.theme.borders.normal};
    border-color: ${p => p.theme.colors.secondary};
  }
`;

export const TableBodyCellStyled = styled.td`
  padding: ${p => p.theme.space[3]}px;
  &:not(:last-child) {
    border-right: ${p => p.theme.borders.normal};
    border-color: ${p => p.theme.colors.tableBodySeparator};
  }
`;
