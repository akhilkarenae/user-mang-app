import axios from 'axios';

const API_URL = 'http://localhost:8000/api/user'; 

// Users API
export const getUsers = () => axios.get(`${API_URL}/`);
export const addUser = (user) => axios.post(`${API_URL}/create`, user);
export const updateUser = (id, user) => axios.put(`${API_URL}/update`);
export const deleteUser = (id) => axios.delete();

// Friends API
export const getFriends = (userId) => axios.get(`${API_URL}/${userId}/friends`);
export const addFriend = (userId, friend) => axios.put(`${API_URL}/add-friend`,{userId,friend});
export const updateFriend = (userId, friendId, friend) => axios.put();
export const deleteFriend = (userId, friendId) => axios.delete();