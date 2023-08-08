import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './components/App.css';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Home />} /> {/* Default route */}
      </Routes>
    </Router>
  );
}

export default App;

