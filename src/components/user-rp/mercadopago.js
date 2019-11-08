import React, { PureComponent } from 'react';
import Tooltip from './tooltip';
class Mercadopago extends PureComponent {
  render() {
    return <>
      {this.props.hovering === true
        ? <Tooltip text="Usalo para comprar, pagar tus facturas o transferirlo a una cuenta bancaria." />
        : null}
      <div className="alert alert-info" role="alert">
        Dinero en Mercado Pago
      </div>
    </>
  }
}

export default Mercadopago;