import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TestPrimero } from './components/header/header';
import { Test2 } from './components/test2';
function App() {
  return (
    <div className="App">
      < TestPrimero />
      <Test2 />
    </div>
  );
}

export default App;
