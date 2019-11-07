import React from 'react'
import Hover from './hover.js';
import Info from './info.js';
import Compras from './compras.js';

export default function Rp() {
  return (
    <>
      <Hover dibujar={(hovering) =>
        <Info hovering={hovering} />
      }/>

      <Hover dibujar={(hovering) =>
        <Compras hovering={hovering} />
      }/>
    </>
  )
}
