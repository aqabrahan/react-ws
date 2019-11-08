import React, { Component } from 'react';
import Tooltip from './tooltip';
class Purchases extends Component {
  render() {
    return <>
      {this.props.hovering === true
        ? <Tooltip text="Usted tiene 140 compras" />
        : null}
      <div className="alert alert-warning" role="alert">
        Compras en Mercado Libre
      </div>
    </>
  }
}

export default Purchases;