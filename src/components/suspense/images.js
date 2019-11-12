import React, { Component } from 'react'
import img1 from '../../vegueta1.jpg';
import img2 from '../../vegueta2.jpg';
export default class Images extends Component {
  render() {
    return (
      <>
        <div className="card">
          <img src={img1} className="card-img-top" />
        </div>

        <div className="card">
          <img src={img2} className="card-img-top" />
        </div>
      </>
    )
  }
}
