import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MyMenus from './pages/myMenus/MyMenus';
import Signup from './pages/signup/Signup';
import Signin from './pages/signin/Signin';
import Home from './pages/home/Home';
import Create from './pages/create/create';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-menus" element={<MyMenus />} />
        <Route path="create" element={<Create />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
