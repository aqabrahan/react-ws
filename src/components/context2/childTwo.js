import React, { Component } from 'react'
import AppContext from './context';
import UserProvider from './contextuser';

export default class ChildTwo extends Component {
  render() {
    const { hairColor } = this.props;
    return (
      <AppContext.Consumer>
        {(context) => (
          <>
            <h4>Pan is from <span className="badge badge-danger">{context.nation}</span> and has a {hairColor} hair.</h4>
            <button className="btn btn-primary" onClick={() => context.onChange(' -- -terricola')}>Change nationality</button>
            <UserProvider.Consumer>
              {(ctx) => (
                <div>Username : {ctx.name}</div>
              )}
            </UserProvider.Consumer>
          </>
        )}
      </AppContext.Consumer>
    )
  }
}
