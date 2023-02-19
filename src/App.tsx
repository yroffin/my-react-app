import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import MenuComponent from './components/MenuComponent';

function App() {
  return (
    <BrowserRouter>
      <MenuComponent />
    </BrowserRouter>
  );
}

export default App;
