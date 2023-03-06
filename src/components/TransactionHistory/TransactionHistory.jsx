import PropTypes from 'prop-types';


import { Box } from '../Box';
import { Thead } from './Thead';
import { Tbody } from './Tbody';

export const TransactionHistory = ({ items }) => {
  return (
    <Box
      as="table"
      bg="stat"
      width="400px"
      mt="10px"
      mb="60px"
      mx="auto"
      borderRadius="normal"
      boxShadow="card"
    >
      <Thead td1="Type" td2="Amount" td3="Currency" />
      <Tbody items={ items} />      
    </Box>
  );
};


TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
