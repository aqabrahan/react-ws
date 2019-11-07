import React, { Component } from 'react';
import Tooltip from './tooltip';
class Mercadopago extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovering: false
    }
    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
  }

  mouseOver = () => this.setState({ hovering: true })
  mouseOut = () => this.setState({ hovering: false })

  render() {
    return <>
      {this.state.hovering === true
        ? <Tooltip text="Usalo para comprar, pagar tus facturas o transferirlo a una cuenta bancaria." />
        : null}
      <div className="alert alert-info" role="alert" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
        Dinero en Mercado Pago
      </div>
    </>
  }
}

export default Mercadopago;