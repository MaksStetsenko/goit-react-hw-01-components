
import PropTypes from 'prop-types';

import { Box } from 'components/Box';
import { TableStyled, TableBodyStyled, TableHeadCellStyled, TableBodyCellStyled } from './transactions.styled'


export const TransactionHistory = ({transactions}) => {
  return (
      <TableStyled>
        <Box
      as="thead"
      textTransform="uppercase"
      letterSpacing="tableHeader"
      backgroundColor="tableHead"
      color="tableHeadText">
          <tr>
            <TableHeadCellStyled>Type</TableHeadCellStyled>
            <TableHeadCellStyled>Amount</TableHeadCellStyled>
            <TableHeadCellStyled>Currency</TableHeadCellStyled>
          </tr>
        </Box>
        <TableBodyStyled>
          {transactions.map(transaction => (
          <tr key={transaction.id}>
            <TableBodyCellStyled>{transaction.type}</TableBodyCellStyled>
            <TableBodyCellStyled>{transaction.amount}</TableBodyCellStyled>
            <TableBodyCellStyled>{transaction.currency}</TableBodyCellStyled>
          </tr>
          ))}
        </TableBodyStyled>
      </TableStyled>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.array.isRequired,
}