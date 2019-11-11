import React, { Component } from 'react'

export default class ChildTwo extends Component {
  render() {
    const { nationality, hairColor, changeNationality } = this.props;
    return (
      <div>
        <h4>Pan is from <span className="badge badge-danger">{nationality}</span> and has a {hairColor} hair.</h4>
        <button className="btn btn-primary" onClick={() => changeNationality('terricola')}>Change nationality</button>
      </div>
    )
  }
}
