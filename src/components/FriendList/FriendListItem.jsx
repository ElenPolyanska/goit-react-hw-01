import PropTypes from 'prop-types';
import styled from 'styled-components';


const FrItem = styled.li`
  display: flex;
  background-color: rgb(248, 240, 240);
  align-items: center;
  margin: 16px auto;
  padding: 10px;
  border-radius: 4px;
  box-shadow: ${p=>p.theme.shadows.item} ; 
`;

const Status = styled.span`
  width: 20px;
  height: 20px;
  margin-right: 15px;
  border-radius: 50%;
  background-color: ${p => (p.isOnline ? 'green' : 'red')};
`;

const Avatar = styled.img`
  width: 60px;
  padding: 8px;
  margin-right: 20px;  
`;

const Text = styled.span`
font-size: ${p => p.theme.fontSizes.l};
  padding-top: 20px;
  padding-bottom: 20px;  
  text-align: center;
  color: #000;
  `;


export const FriendListItem = ({ avatar, name, id, isOnline }) => {
  return (
    <FrItem key={id}>
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar} alt={name} />
      <Text>{name}</Text>
    </FrItem>
  );
};


FriendListItem.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.isRequired,
  }).isRequired,
};
