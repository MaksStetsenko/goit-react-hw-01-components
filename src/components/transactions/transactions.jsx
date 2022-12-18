
import PropTypes from 'prop-types';

import { Box } from 'components/Box';
import { TableStyled, TableBodyStyled, TableHeadCellStyled, TableBodyCellStyled } from './Transactions.styled'


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
          {transactions.map(({id, type, amount, currency}) => (
          <tr key={id}>
            <TableBodyCellStyled>{type}</TableBodyCellStyled>
            <TableBodyCellStyled>{amount}</TableBodyCellStyled>
            <TableBodyCellStyled>{currency}</TableBodyCellStyled>
          </tr>
          ))}
        </TableBodyStyled>
      </TableStyled>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};