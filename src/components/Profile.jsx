import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from './Box';

const Description = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;
  padding: 10px;
`;

const Avatar = styled.img`
  width: 200px;
  height: 100%;
  margin-bottom: ${p => p.theme.space[1]}px;
  padding: ${p => p.theme.space[2]}px;
  `;

const Name = styled.p`
  font-size: 18px;
  font-weight: 700;
 margin-bottom: ${p => p.theme.space[3]}px;
`;

const Info = styled.p`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${p => p.theme.space[2]}px;
`;

const Stats = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 70px;
  border-top: 1px solid #ccc;
  margin: 0;
  
  background: ${p => p.theme.colors.back};
border-radius: 0 0 ${p=>p.theme.radii.normal} ${p=>p.theme.radii.normal}; 
`;

const Item = styled.li`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #ccc;
`;

const Label = styled.span`
  color: ${p=>p.theme.colors.white};
  margin-bottom: 5px;
`;

const Quantity = styled.span`
  color: ${p=>p.theme.colors.white};
`;

export const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <Box
      bg="main"
      width="400px"
      mb="60px"
      mx="auto"
     borderRadius="normal"
      boxShadow="card"
    >
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Info>@{tag}</Info>
        <Info>{location}</Info>
      </Description>

      <Stats>
        <Item>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </Item>
        <Item>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </Item>
        <Item>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </Item>
      </Stats>
    </Box>
  );
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
};
