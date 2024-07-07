import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/">Users</Link></li>
      <li><Link to="/add-user">Add User</Link></li>
    </ul>
  </nav>
);

export default Navbar;