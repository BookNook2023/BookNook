import React, {useState} from 'react';
import './Login.css'; 


//Need to add in event handlers such as handleSubmit and the value field to store whatever the user types
//Also we need to talk about how to connect this back to the databse in terms of creating a new entry or accessing one
const Login = () => {
  const [username, setUsername] = useState('');
  const [userId, setUserId] = useState(null);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const response = await fetch(`http://localhost:3001/api/login?username=${username}`);
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setUserId(data.id);
      } else {
        setUserId(null);
      }
    } catch {
      console.error("Error: username not found");
    }
  }
  

  const handleUsernameChange = (evt) => {
    setUsername(evt.target.value);
  }
  
  return (
    <div className="App login-container">
      <h1>this is where you login! rainbows</h1>
      <form onSubmit = {handleSubmit} >
        <input
          type="text"
          placeholder="Enter your username"
          value = {username}
          onChange = {handleUsernameChange}
        />
        <button type="submit">Login</button>
      </form>
      {userId !== null && <p>Welcome, user with ID: {userId}</p>}
    </div>
  );
};

export default Login;
