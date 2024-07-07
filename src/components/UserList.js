import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser, getAuthenticatedUserData } from '../services/api';
import { Link } from 'react-router-dom';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);
  // const [authUserData, setAuthUserData] = useState({});

  // const fetchData = async() =>{
  //   const authenticatedUser = await getAuthenticatedUserData();
  //   console.log(authenticatedUser.data.user," auth user")
  //   setAuthUserData(authenticatedUser.data.user)
  // }

  // useEffect(()=>{
  //   fetchData()
  // },[])

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await getUsers();
    setUsers(result.data.users);
  };

  const handleDelete = async (id) => {
    console.log(id, " id")
    await deleteUser(id);
    // loadUsers();
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users ?  users.map(user => (
          <li key={user.id}>
            {user.fullName} ({user.email}) 
            <button onClick={() => handleDelete(user._id)}>Delete</button>
            <Link to={`/users/${user._id}/friends`}>View Friends</Link>
          </li>
        )) : <></>}
      </ul>
    </div>
  );
};

export default UserList;