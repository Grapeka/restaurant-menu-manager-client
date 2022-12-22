import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signup from './pages/signup/Signup';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
