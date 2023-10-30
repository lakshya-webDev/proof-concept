import React, { useEffect, useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import users from '../../JSON/users.json'; 
import { useNavigate } from 'react-router';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Find the user from JSON
    const user = users.users.find(
      (user) => user.email === email || user.username === email
    );

    if (user && user.password === password) {
      const userAuth = {
        isLoggedIn: true,
        userDetails: user,
      };
      // Store user authentication data
      localStorage.setItem('loggedInUser', JSON.stringify(userAuth));
      navigate('/dashboard'); // Redirect to the dashboard or any other authorized page
    } else {
      setLoginError(true);
    }
  };

  useEffect(() => {
    // Check if the user is already logged in
    const loggedInUser = JSON.parse(window.localStorage.getItem('loggedInUser'));

    if (loggedInUser && loggedInUser.isLoggedIn) {
      // Redirect to the dashboard or any other authorized page
      navigate('/dashboard');
    }
  }, []);

  return (
    <div className="login-box">
      <form onSubmit={handleLogin}>
        <img
          src="https://i.imgur.com/NABQcXH.png"
          width="200px"
          alt="user icon"
        />
        <h2>Member login</h2>
        <Input
          type="text"
          text={email}
          placeholder="Enter email / username"
          handleChangeText={(event) => setEmail(event.target.value)}
        />

        <Input
          type="password"
          text={password}
          placeholder="Password"
          handleChangeText={(event) => setPassword(event.target.value)}
        />

        {loginError && (
          <div className="error-message text-danger">Login failed. Please check your email and password.</div>
        )}

        <Button className="btn" type="submit" text="Login" />
      </form>
    </div>
  );
};

export default Login;
