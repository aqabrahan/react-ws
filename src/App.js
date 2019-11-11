import React, { Component } from 'react';
import './App.css';
import Context from './components/context';
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Context />
      </div>
    );
  }
}

export default App;
