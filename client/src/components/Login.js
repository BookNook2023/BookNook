import React from 'react';
import './Login.css'; 

//Need to add in event handlers such as handleSubmit and the value field to store whatever the user types
//Also we need to talk about how to connect this back to the databse in terms of creating a new entry or accessing one
const Login = () => {
  return (
    <div className="App login-container">
      <h1>this is where you login! rainbows</h1>
      <form >
        <input
          type="text"
          placeholder="Enter your username"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
