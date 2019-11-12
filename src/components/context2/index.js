import React, { Component } from 'react'
import AppContext from './context';

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nation: 'Vegeta',
      onChange: (nation) => {
        this.setState({nation});
      }
    }
  }
  render() {
    return (
      <AppContext.Provider value={this.state}>
        <h1>Hi everyone, I'm from <span className="badge badge-success">{this.state.nation}</span> planet and my son</h1>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}
