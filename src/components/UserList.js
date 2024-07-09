import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../services/api';
import { Link, useNavigate } from 'react-router-dom';
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
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await getUsers();
    setUsers(result.data.users);
  };

  const handleDelete = async (id) => {
    console.log(id, " from handle data")
    await deleteUser(id);
    loadUsers();
  };


  const handleUpdate = (id) => {
    navigate(`/edit-user/${id}`);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Created By</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user._id}>
              <TableCell>{user.fullName}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.createdByEmail}</TableCell>
              <TableCell align="right">
                <IconButton onClick={() => handleUpdate(user._id)} color="primary">
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(user._id)} color="secondary">
                  <DeleteIcon />
                </IconButton>
                <Button
                  component={Link}
                  to={`/users/${user._id}/friends`}
                  variant="outlined"
                  color="primary"
                >
                  View Friends
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserList;


// import React, { useEffect, useState } from 'react';
// import { getUsers, deleteUser } from '../services/api';
// import { Link } from 'react-router-dom';

// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   useEffect(() => {
//     loadUsers();
//   }, []);

//   const loadUsers = async () => {
//     const result = await getUsers();
//     setUsers(result.data.users);
//   };

//   const handleDelete = async (id) => {
//     await deleteUser(id);
//     loadUsers();
//   };

//   return (
//     <div>
//       <h2>User List</h2>
//       <ul>
//         {users ?  users.map(user => (
//           <li key={user.id}>
//             {user.fullName} ({user.email}) 
//             <button onClick={() => handleDelete(user._id)}>Delete</button>
//             <Link to={`/users/${user._id}/friends`}>View Friends</Link>
//           </li>
//         )) : <></>}
//       </ul>
//     </div>
//   );
// };

// export default UserList;

