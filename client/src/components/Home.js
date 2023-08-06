import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import logo from './logo.svg';
import book from './book.svg';

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>BOOK<span>NOOK</span></p>
        <img src={logo} className="App-logo" alt="logo" />
        <img src={book} className="App-book" alt="book" />

        <Link to="/login">
          <button>Login</button>
        </Link>
        <a href="url">Sign Up</a>
      </header>
    </div>
  );
};

export default Home;
