import React, { Component } from 'react';
import './App.css';
import Context from './components/context2';
import Child from './components/context2/child';
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Context>
          <Child />
        </Context>
      </div>
    );
  }
}

export default App;
