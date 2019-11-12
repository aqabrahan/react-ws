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
        {this.props.children}
      </AppContext.Provider>
    )
  }
}
