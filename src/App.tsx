import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Some tasks</h1>
      <Outlet />
    </div>
  );
}

export default App;
