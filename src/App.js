import React from 'react';
import './App.css';
import Title from './components/title';
import Profile from './components/profile';
import RenderProps from './components/renderprops';
import User from './components/user';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <User />
      </header>
    </div>
  );
}

export default App;
