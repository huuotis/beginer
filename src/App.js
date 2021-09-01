import React from 'react';
import HomePage from './pages/HomePage';
import './App.css';

const toggle = document.getElementById("nav-toggle");
const nav = document.getElementById("nav-menu");
console.log(toggle, nav);

function App() {
  return (
    <>
      <HomePage />
    </>
  );
}

export default App;
