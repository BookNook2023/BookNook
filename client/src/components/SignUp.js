import React, {useState} from 'react';
//import './SignUp.css'; 

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')

  const handleUsernameChange = event => setUsername(event.target.value)
  const handlePasswordChange = event => setPassword(event.target.value)

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.status === 201) {
        const data = await response.json();
      } else if (response.status === 400) {
        console.log('User already exists');
      } else {
        console.log('Server error');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App login-container">
      <h1>SIGN UP RIGHT HERE!</h1>
      <form onSubmit = {handleSubmit} >
      <div className='input-container'>
        <input
          type="text"
          placeholder="Enter your username"
          value = {username}
          onChange = {handleUsernameChange}
        />
         </div>
         <div className='input-container'>
          <input
            className='input-textbox'
            type='password'
            id='password'
            placeholder='password'
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default SignUp;
