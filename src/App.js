import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/title';
import Profile from './components/profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title title="DEMO 1 Title PropTypes" author="demo1@gmail.com" />
        <Profile user={{ name: 'Son Goku', email: 'goku@meli.com', avatar: 'https://image.shutterstock.com/image-vector/default-avatar-profile-icon-grey-600w-518740756.jpg' }} />
      </header>
    </div>
  );
}

export default App;
