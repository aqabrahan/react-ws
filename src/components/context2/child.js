import React, { Component } from 'react'
import AppContext from './context';
import ChildTwo from './childTwo';

export default class Child extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {(context) => (
          <>
            <h2>Gohan is from <span className="badge badge-warning">{context.nation}</span> too. {context.equipo}---</h2>
            <button className="btn btn-success" onClick={() => context.onChange('From Child 2')}>Change from nation C2</button>
            <ChildTwo hairColor="Black" />
          </>
        )}

      </AppContext.Consumer>
    )
  }
}
