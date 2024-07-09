import axios from 'axios';

const API_URL = 'http://localhost:8000/api/user'; 

// Users API
export const getUsers = () => axios.get(`${API_URL}/`, {withCredentials:true});
export const addUser = (user) => axios.post(`${API_URL}/create`, user, {withCredentials:true});
export const updateUser = (id, user) => axios.put(`${API_URL}/update`, {id,user}, {withCredentials:true});
export const deleteUser = (id) => axios.delete(`${API_URL}/delete/${id}`, {withCredentials:true});
export const getUserById = (userId) => axios.get(`${API_URL}/${userId}`, {withCredentials:true});

// Friends API
export const getFriends = (userId) => axios.get(`${API_URL}/${userId}/friends`,{withCredentials:true});
export const addFriend = (userId, friend) => axios.put(`${API_URL}/add-friend`,{userId,friend},{withCredentials:true});
export const getFriendById = () => axios.get()
export const updateFriend = (userId, friendId, friend) => axios.put(`${API_URL}/update-friend`);
export const deleteFriend = (userId, friendId) => axios.put(`${API_URL}/delete-friend`, {userId, friendId}, {withCredentials:true});


export const getAuthenticatedUserData = async () =>{
    try{
      const response = await axios.get("http://localhost:8000/login/sucess",{withCredentials:true})
      return response;
    }catch(err){
      console.log(err," error ")
    }
}