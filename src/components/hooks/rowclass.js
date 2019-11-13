import React, { Component } from 'react'

export default class Row extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Son',
      lastname: 'Gohan'
    }
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
  }

  onChangeName(e) {
    this.setState({name: e.target.value})
  }
  onChangeLastname(e) {
    this.setState({lastname: e.target.value})
  }

  render() {
    return (
      <>
        <div className="alert alert-primary">
          <input value={this.state.name} onChange={this.onChangeName} />
          <p><strong>Name: </strong></p>
          <p>{this.state.name}</p>
        </div>
        <div className="alert alert-primary">
          <input value={this.state.lastname} onChange={this.onChangeLastname} />
          <p><strong>LastName: </strong></p>
          <p>{this.state.lastname}</p>
        </div>
      </>
    )
  }
}
