import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const SignupPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className="FormWrapper">
      <h1 className="Title">Sign Up for MatchMe</h1>
      <form className="Form" onSubmit={handleSubmit}>
        <input className="Input" type="text" placeholder="Name" required />
        <input className="Input" type="email" placeholder="Email" required />
        <input className="Input" type="password" placeholder="Password" required />
        <button className="Button" type="submit">Sign Up</button>
      </form>
      <Link className="TextLink" to="/login">Already have an account? Login</Link>
    </div>
  );
};

export default SignupPage;
