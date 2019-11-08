import React from 'react'
import Purchases from './purchases';
import MercadoPago from './mercadopago';
import MercadoEnvios from './mercadoenvios';
import TextHover from './textHover';

export default function UserRP(props) {
  return (
    <>
      <TextHover render={(hovering)=>
        <Purchases hovering={hovering} />
      } />

      <TextHover render={(hovering)=>
        <MercadoPago hovering={hovering} />
      } />

      <TextHover render={(hovering)=>
        <MercadoEnvios {...props} hovering={hovering} />
      }/>
      {/*<TextHover>
        {(hovering) => <MercadoEnvios hovering={hovering} />}
      </TextHover>*/}
    </>
  )
}
