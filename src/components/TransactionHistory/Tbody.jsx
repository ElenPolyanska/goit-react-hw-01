import styled from 'styled-components';
import PropTypes from 'prop-types';

const Trow = styled.tr`
  background-color: #fff;
  font-size: 14px;

  :nth-child(even) {
    background-color: #faf0e3;    
}`;

const Td = styled.td`
  height: 42px;
  width: 133px;
  padding-left: 40px;

  :first-letter {
    text-transform: uppercase;}
`;

export const Tbody = ({ items }) => {
  return (
    <tbody>
      {items.map(({ id, type, amount, currency }) => {
        return (
          <Trow key={id}>
            <Td>{type}</Td>
            <Td>{amount}</Td>
            <Td>{currency}</Td>
          </Trow>
        );
      })}
    </tbody>
  );
};


Tbody.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
