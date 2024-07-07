import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/add-user" element={<UserForm />} />
      <Route path="/edit-user/:id" element={<UserForm />} />
      <Route path="/users/:userId/friends" element={<FriendList />} />
      <Route path="/users/:userId/add-friend" element={<FriendForm />} />
      <Route path="/users/:userId/edit-friend/:friendId" element={<FriendForm />} />
    </Routes>
  </Router>
  );
};

export default App;