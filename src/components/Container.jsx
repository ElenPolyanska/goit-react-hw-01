import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledContainer = styled.div`
padding: 20px;
background: ${p => p.theme.colors.bg};
`;

export const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

Container.propTypes = {
    children: PropTypes.node,
};
