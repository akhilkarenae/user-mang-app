import React, { useEffect, useState } from 'react';
import { getFriends, deleteFriend } from '../services/api';
import { Link, useParams } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

// CSS styling to center the table and set its width
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh', // Ensures the table is centered vertically
  },
  table: {
    maxWidth: '80%', // Control the table's maximum width
    width: '600px', // Set a fixed width, adjust as needed
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  addButton: {
    display: 'block',
    margin: '20px auto 0', // Center the button and add top margin
  },
};

const FriendList = () => {
  const { userId } = useParams();
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    loadFriends();
  }, []);

  const loadFriends = async () => {
    try {
      const result = await getFriends(userId);
      console.log(result.data.friendsList);
      setFriends(result.data.friendsList);
    } catch (error) {
      console.error("Error loading friends list:", error);
    }
  };

  const handleDelete = async (friendId) => {
    try {
      await deleteFriend(userId, friendId);
      loadFriends();
    } catch (error) {
      console.error("Error deleting friend:", error);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.table}>
        <h2 style={styles.header}>Friends List</h2>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {friends.map((friend) => (
                <TableRow key={friend._id}>
                  <TableCell>{friend.name}</TableCell>
                  <TableCell align="right">
                    <IconButton
                      onClick={() => handleDelete(friend._id)}
                      color="secondary"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button
          component={Link}
          to={`/users/${userId}/add-friend`}
          variant="outlined"
          startIcon={<AddIcon />}
          color="primary"
          style={styles.addButton}
        >
          Add Friend
        </Button>
      </div>
    </div>
  );
};

export default FriendList;



// import React, { useEffect, useState } from 'react';
// import { getFriends, deleteFriend } from '../services/api';
// import { Link, useParams } from 'react-router-dom';

// const FriendList = () => {
//   const { userId } = useParams();
//   const [friends, setFriends] = useState([]);

//   useEffect(() => {
//     loadFriends();
//   }, []);

//   const loadFriends = async () => {
//     const result = await getFriends(userId);
//     console.log(result.data.friendsList)
//     setFriends(result.data.friendsList);
//   };

//   const handleDelete = async (friendId) => {
//     await deleteFriend(userId, friendId);
//     loadFriends();
//   };

//   return (
//     <div>
//       <h2>Friends List</h2>
//       <ul>
//         {friends.map(friend => (
//           <li key={friend.id}>
//             {friend.name} 
//             <button onClick={() => handleDelete(friend.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//       <Link to={`/users/${userId}/add-friend`}>Add Friend</Link>
//     </div>
//   );
// };

// export default FriendList;