import React from 'react';
import Tooltip from './tooltip';
export default function Mercadoenvios(props) {
    return (
    <>
      {props.hovering === true
        ? <Tooltip text="Usted tiene 3 paquetes pendientes a enviar" />
        : null}
      <div className="alert alert-success" role="alert">
        Paquetes por despachar
      </div>
    </>
    )
}