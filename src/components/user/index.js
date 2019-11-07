import React from 'react'
import Purchases from './purchases';
import MercadoPago from './mercadopago';
import MercadoEnvios from './mercadoenvios';

export default function User() {
  return (
    <>
      <Purchases />
      <MercadoPago />
      <MercadoEnvios />
    </>
  )
}
