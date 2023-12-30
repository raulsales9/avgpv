import React from 'react';
import logo from './logo.svg';
import { gsap } from "gsap";
import './App.css';
import { Header } from './components/header/header';
import { HomePage } from './components/home/HomePage';
import  { Footer } from './components/footer/footer';

function App() {
  return (
    <div className="App">
      < Header />
      <HomePage/>
      <Footer />
    </div>
  );
}

export default App;
