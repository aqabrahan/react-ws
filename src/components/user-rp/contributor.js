import React, { Component } from 'react'

export default class Contributor extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.username}
      </div>
    )
  }
}
