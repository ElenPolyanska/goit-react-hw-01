import styled from 'styled-components';
import PropTypes from 'prop-types';

const Th = styled.th`
  color: ${p => p.theme.colors.white};
  font-size: 14px;
  text-transform: uppercase;
  height: 48px;
  text-align: center;
  background: ${p => p.theme.colors.back};

  :first-child {
    border-radius: ${p => p.theme.radii.normal} 0 0 0;
  }

  :last-child {
    border-radius: 0 ${p => p.theme.radii.normal} 0 0;
  }
`;

export const Thead = ({ td1, td2, td3 }) => {
  return (
    <thead>
      <tr>
        <Th>{td1}</Th>
        <Th>{td2}</Th>
        <Th>{td3}</Th>
      </tr>
    </thead>
  );
};

Thead.propTypes = {
  td1: PropTypes.string,
  td2: PropTypes.string,
  td3: PropTypes.string,
};
