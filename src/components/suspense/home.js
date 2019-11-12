import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>HOME</h1>
        <p>You are on my home page</p>
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="/graph">Graphs</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/images">Images</Link>
          </li>
        </ul>
      </div>
    )
  }
}
