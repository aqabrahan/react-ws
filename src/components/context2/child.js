import React, { Component } from 'react'
import AppContext from './context';
import UserProvider from './contextuser';
import ChildTwo from './childTwo';

export default class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      session: 'asd123',
      name: 'Paco'
    }
  }
  render() {
    return (
      <AppContext.Consumer>
        {(context) => (
          <>
            <h2>Gohan is from <span className="badge badge-warning">{context.nation}</span> too.</h2>
            <button className="btn btn-secondary" onClick={() => context.onChange('From Child 2')}>Change from Child</button>
            <UserProvider.Provider  value={this.state}>
              <ChildTwo hairColor="Black" />
            </UserProvider.Provider>
          </>
        )}

      </AppContext.Consumer>
    )
  }
}