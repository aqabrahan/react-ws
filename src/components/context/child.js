import React, { Component } from 'react'
import ChildTwo from './childtwo';

export default class Child extends Component {
  render() {
    const { nationality, changeNationality } = this.props;
    return (
      <div>
        <h2>Gohan is from <span className="badge badge-warning">{nationality}</span> too.</h2>
        <ChildTwo nationality={nationality} hairColor="Black" changeNationality={changeNationality}/>
      </div>
    )
  }
}
