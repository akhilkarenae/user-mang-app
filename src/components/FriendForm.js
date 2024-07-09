
import React, { useState, useEffect } from 'react';
import { addFriend, updateFriend, getFriendById } from '../services/api';
import { useNavigate, useParams } from 'react-router-dom';
import { TextField, Button, Container, Paper, Typography } from '@mui/material';

const FriendForm = () => {
  const [friend, setFriend] = useState({ friendName: '' });
  const navigate = useNavigate();
  const { userId, friendId } = useParams();

  useEffect(() => {
    if (friendId) {
      loadFriend();
    }
  }, [friendId]);

  const loadFriend = async () => {
    try {
      const result = await getFriendById(userId, friendId);
      setFriend(result.data.friend);
    } catch (error) {
      console.error('Error loading friend:', error);
    }
  };

  const handleChange = (e) => {
    setFriend({ ...friend, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (friendId) {
        await updateFriend(userId, friendId, friend);
      } else {
        await addFriend(userId, friend);
      }
      navigate(`/users/${userId}/friends`);
    } catch (error) {
      console.error('Error saving friend:', error);
    }
  };

  return (
    <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Paper style={{ padding: '20px', maxWidth: '500px', width: '100%' }}>
        <Typography variant="h4" align="center" gutterBottom>
          {friendId ? 'Edit Friend' : 'Add Friend'}
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Friend's Name"
            name="friendName"
            value={friend.friendName}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: '20px' }}
          >
            {friendId ? 'Update' : 'Add'}
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default FriendForm;

// import React, { useState } from 'react';
// import { addFriend, updateFriend } from '../services/api';
// import { useNavigate, Navigate, useParams } from 'react-router-dom';



// const FriendForm = () => {
//   const [friend, setFriend] = useState({ friendName: '' });
//   const navigate = useNavigate();
//   const { userId, friendId } = useParams();

//   const handleChange = (e) => {
//     setFriend({ ...friend, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (friendId) {
//       await updateFriend(userId, friendId, friend);
//     } else {
//       await addFriend(userId, friend);
//     }
//     navigate(`/users/${userId}/friends`);
//   };

//   return (
//     <div>
//       <h2>{friendId ? 'Edit Friend' : 'Add Friend'}</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="friendName" placeholder="Friend's Name" value={friend.name} onChange={handleChange} required />
//         <button type="submit">{friendId ? 'Update' : 'Add'}</button>
//       </form>
//     </div>
//   );
// };

// export default FriendForm;