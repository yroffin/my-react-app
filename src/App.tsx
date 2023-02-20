import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter } from 'react-router-dom';
import PhaserCoreComponent from './components/PhaserCoreComponent';

function App() {
  return (
    <HashRouter>
      <PhaserCoreComponent />
    </HashRouter>
  );
}

export default App;
