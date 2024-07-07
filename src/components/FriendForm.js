import React, { useState } from 'react';
import { addFriend, updateFriend } from '../services/api';
import { useNavigate, Navigate, useParams } from 'react-router-dom';



const FriendForm = () => {
  const [friend, setFriend] = useState({ friendName: '' });
  const navigate = useNavigate();
  const { userId, friendId } = useParams();

  const handleChange = (e) => {
    setFriend({ ...friend, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (friendId) {
      await updateFriend(userId, friendId, friend);
    } else {
      await addFriend(userId, friend);
    }
    navigate(`/users/${userId}/friends`);
  };

  return (
    <div>
      <h2>{friendId ? 'Edit Friend' : 'Add Friend'}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="friendName" placeholder="Friend's Name" value={friend.name} onChange={handleChange} required />
        <button type="submit">{friendId ? 'Update' : 'Add'}</button>
      </form>
    </div>
  );
};

export default FriendForm;