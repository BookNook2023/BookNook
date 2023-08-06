import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './components/App.css';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Home />} /> {/* Default route */}
      </Routes>
    </Router>
  );
}

export default App;

