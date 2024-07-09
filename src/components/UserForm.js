import React, { useState, useEffect } from 'react';
import { addUser, updateUser, getUserById } from '../services/api';
import { useNavigate, useParams } from 'react-router-dom';
import { TextField, Button, Container, Paper, Typography } from '@mui/material';

const UserForm = () => {
  const [user, setUser] = useState({ email: '', fullName: '', phoneNumber: '' });
  const navigate = useNavigate();
  const { id } = useParams();

  console.log(id, " user id from user form")

  useEffect(() => {
    if (id) {
      loadUser();
    }
  }, [id]);

  const loadUser = async () => {
    try {
      const result = await getUserById(id);
      setUser(result.data.user);
    } catch (error) {
      console.error('Error loading user:', error);
    }
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await updateUser(id, user);
      } else {
        await addUser(user);
      }
      navigate('/');
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  console.log("from here in edit user")

  return (
    <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Paper style={{ padding: '20px', maxWidth: '500px', width: '100%' }}>
        <Typography variant="h4" align="center" gutterBottom>
          {id ? 'Edit User' : 'Add User'}
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            name="email"
            value={user.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Full Name"
            name="fullName"
            value={user.fullName}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Phone Number"
            name="phoneNumber"
            value={user.phoneNumber}
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
            {id ? 'Update' : 'Add'}
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default UserForm;


// import React, { useState } from 'react';
// import { addUser, updateUser } from '../services/api';
// import { useNavigate, Navigate, useParams } from 'react-router-dom';


// const UserForm = () => {
//   const [user, setUser] = useState({ email: '', fullName: '', phoneNumber: '' });
//   // const history = useHistory();
//   const navigate = useNavigate();
//   const { id } = useParams();

//   const handleChange = (e) => {
//     console.log(e.target.name)
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (id) {
//       await updateUser(id, user);
//     } else {
//       console.log(user," suer ")
//       await addUser(user);
//     }
//     navigate('/');
//   };

//   return (
//     <div>
//       <h2>{id ? 'Edit User' : 'Add User'}</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} required />
//         <input type="text" name="fullName" placeholder="Name" value={user.fullName} onChange={handleChange} required />
//         <input type="text" name="phoneNumber" placeholder="phoneNumber" value={user.phoneNumber} onChange={handleChange} required />
//         <button type="submit">{id ? 'Update' : 'Add'}</button>
//       </form>
//     </div>
//   );
// };

// export default UserForm;