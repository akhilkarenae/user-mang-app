import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../services/api';
import { Link } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await getUsers();
    console.log(result,"result ")
    setUsers(result.data.users);
  };

  const handleDelete = async (id) => {
    // await deleteUser(id);
    // loadUsers();
  };

// const users = [{name:"test1",email:"test@gmail.com",id:"1"},
//   {name:"test2",email:"test2@gmail.com",id:"2"},
//   {name:"test3",email:"test3@gmail.com",id:"3"},
//   {name:"test4",email:"test4@gmail.com",id:"4"},
//   {name:"test5",email:"test5@gmail.com",id:"5"},
//   {name:"test6",email:"test6@gmail.com",id:"6"},
//   {name:"test7",email:"test7@gmail.com",id:"7"}
// ]

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users ?  users.map(user => (
          <li key={user.id}>
            {user.fullName} ({user.email}) 
            <button onClick={() => handleDelete(user.id)}>Delete</button>
            <Link to={`/users/${user._id}/friends`}>View Friends</Link>
          </li>
        )) : <></>}
      </ul>
    </div>
  );
};

export default UserList;