import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./navbar.css"
import Button from '../Button';
const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in (retrieve user data from localStorage)
    const loggedInUser = JSON.parse(window.localStorage.getItem('loggedInUser'));
    if (loggedInUser && loggedInUser.isLoggedIn) {
      setUser(loggedInUser.userDetails);
    }
  }, []); 

  const handleLogout = () => {
    // Clear user data from localStorage and navigate to the login page
    window.localStorage.removeItem('loggedInUser');
    setUser(null);
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <Link to="/dashboard">Dashboard</Link>
      {user && (
        <div className="user-info">
          <span>Welcome, {user.name}</span>
          <Button onClick={handleLogout} className="logout-btn" text="Logout"></Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
