import React, { Component } from 'react';
import './App.css';

import Timer from "./components/lifecycle";
const SITES = ['MLA', 'MLB', 'MLC', 'MLB', 'MLP'];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      site: 'MLB'
    }
  }
  changeSite = () => {
    this.setState({
      site: SITES[parseInt(Math.random() * 4)]
    })
  }
  render() {
    const { site } = this.state;
    return (
      <div className="App">
        <button className="btn btn-primary" onClick={this.changeSite}>Change Site</button>
        <hr />
        <Timer site={site} />
      </div>
    );
  }
}

export default App;
