import React from 'react';
import logo from './logo.svg';
import './App.css';
import a from './small.jpg';
import b from './big.jpg';
function App() {
  return (
    <div className="App">
      <img src = {a}></img>
      <img src = {b}></img>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hello
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
