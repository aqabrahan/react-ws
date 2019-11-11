import React, { Component } from 'react'
import Child from './child';

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nationality: 'Vegeta'
    }
  }

  changeNationality = (nationality) => {
    this.setState({
      nationality
    })
  }

  render = _ => (
    <div className="card">
      <h1>Hi everyone, I'm from <span className="badge badge-success">{this.state.nationality}</span> planet and my son</h1>
      <Child nationality={this.state.nationality} changeNationality={this.changeNationality}/>
    </div>
  )
}
