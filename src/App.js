import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/title';
import Profile from './components/profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title title="DEMO 1 PropTypes" author="demo1@gmail.com" />
        <Profile user={{ name: 'Son Goku', email: 'goku@meli.com' }} />
      </header>
    </div>
  );
}

export default App;
