import React, { useEffect, useState } from 'react';
import { getFriends, deleteFriend } from '../services/api';
import { Link, useParams } from 'react-router-dom';

const FriendList = () => {
  const { userId } = useParams();
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    loadFriends();
  }, []);

  const loadFriends = async () => {
    const result = await getFriends(userId);
    console.log(result.data.friendsList)
    setFriends(result.data.friendsList);
  };

  const handleDelete = async (friendId) => {
    await deleteFriend(userId, friendId);
    loadFriends();
  };

  return (
    <div>
      <h2>Friends List</h2>
      <ul>
        {friends.map(friend => (
          <li key={friend.id}>
            {friend.name} 
            <button onClick={() => handleDelete(friend.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <Link to={`/users/${userId}/add-friend`}>Add Friend</Link>
    </div>
  );
};

export default FriendList;