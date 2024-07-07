import React, { useState } from 'react';
import { addUser, updateUser } from '../services/api';
import { useNavigate, Navigate, useParams } from 'react-router-dom';


const UserForm = () => {
  const [user, setUser] = useState({ email: '', fullName: '', phoneNumber: '' });
  // const history = useHistory();
  const navigate = useNavigate();
  const { id } = useParams();

  const handleChange = (e) => {
    console.log(e.target.name)
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await updateUser(id, user);
    } else {
      console.log(user," suer ")
      await addUser(user);
    }
    navigate('/');
  };

  return (
    <div>
      <h2>{id ? 'Edit User' : 'Add User'}</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} required />
        <input type="text" name="fullName" placeholder="Name" value={user.fullName} onChange={handleChange} required />
        <input type="text" name="phoneNumber" placeholder="phoneNumber" value={user.phoneNumber} onChange={handleChange} required />
        <button type="submit">{id ? 'Update' : 'Add'}</button>
      </form>
    </div>
  );
};

export default UserForm;