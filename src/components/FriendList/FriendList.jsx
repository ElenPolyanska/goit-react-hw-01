import PropTypes from 'prop-types';
import { Box } from '../Box';
import { FriendListItem } from './FriendListItem';


export const FriendList = ({ friends }) => {
  return (
    <Box
      bg="main"
      as="ul"
      width="368px"
      mt="10px"
      mb="60px"
      mx="auto"
      borderRadius="normal"
      boxShadow="card"
      px="16px"
      py="8px"
    >
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <FriendListItem
            id={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </Box>
  );
};


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};
