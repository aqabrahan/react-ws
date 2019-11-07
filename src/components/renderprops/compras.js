import React from 'react'
const Tooltip = (props) => {
  return <div>Esto es tooltip 2 de compras</div>
}
export default function Compras(props) {
  return <>
      {props.hovering === true
        ? <Tooltip />
        : null}
      <div>Contenido compras</div>
  </>

}
