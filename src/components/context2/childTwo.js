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
            <button className="btn btn-primary" onClick={() => context.onChange('Terricola')}>Change nationality</button>
            <UserProvider.Consumer>
              {ctx => (
                <>
                  <h3>Name: {ctx.name}, from  {context.nation}</h3>
                </>
              )}
            </UserProvider.Consumer>
          </>
        )}
      </AppContext.Consumer>
    )
  }
}
