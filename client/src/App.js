import logo from './logo.svg';
import book from './book.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>BOOK<span>NOOK</span></p>
        <img src={logo} className="App-logo" alt="logo" />
        <img src={book} className="App-book" alt="book" />
        <button>Login</button>
        <a href="url">Sign Up</a>
      </header>
    </div>
  );
}

export default App;
