import React from 'react'
const Tooltip = (props) => {
  return <div>Esto es tooltip</div>
}
export default function Info(props) {
  return <>
      {props.hovering === true
        ? <Tooltip />
        : null}
      <div>Contenido</div>
  </>

}
