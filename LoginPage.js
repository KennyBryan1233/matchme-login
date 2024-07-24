import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className="FormWrapper">
      <h1 className="Title">Login to MatchMe</h1>
      <form className="Form" onSubmit={handleSubmit}>
        <input className="Input" type="email" placeholder="Email" required />
        <input className="Input" type="password" placeholder="Password" required />
        <button className="Button" type="submit">Login</button>
      </form>
      <Link className="TextLink" to="/signup">Don't have an account? Sign Up</Link>
    </div>
  );
};

export default LoginPage;
