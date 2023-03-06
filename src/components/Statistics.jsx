// const { default: styled } = require("styled-components");
// import { ReactPropTypes } from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Box } from './Box';

const Title = styled.h2`
  font-size: ${p => p.theme.fontSizes.l};
  padding-top: 20px;
  padding-bottom: 20px;
  text-transform: uppercase;
  text-align: center;
  color: #000;
`;

const StatList = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-radius: 0 0 ${p => p.theme.radii.normal} ${p => p.theme.radii.normal};
`;

const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 8px;
  font-size: ${p => p.theme.fontSizes.m};
  background: ${p => p.theme.colors.random};

  :first-child {
    border-radius: 0 0 0 ${p => p.theme.radii.normal};
  }

  :last-child {
    border-radius: 0 0 ${p => p.theme.radii.normal} 0;
  }
`;

const Text = styled.span`
  font-weight: 400;
  color: #fff;
  font-size: 16px;
`;

export const Statistics = ({ title, stats }) => {
  return (
    <Box
      bg="stat"
      width="400px"
      mt="10px"
      mb="60px"
      mx="auto"
      borderRadius="normal"
      boxShadow="card"
      pt="8px"
    >
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatItem key={id}>
              <Text>{label}</Text>
              <Text>{percentage}%</Text>
            </StatItem>
          );
        })}
      </StatList>
    </Box>
  );
};


Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
