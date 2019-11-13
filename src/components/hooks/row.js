import React, { useState } from 'react'

export default function Row(props) {
  const [name, setName] = useState('Son')
  const [lastname, setLastname] = useState('Gohan')
  const onChangeName = (e) => {
    setName(e.target.value);
  }
  const onChangeLastname = (e) => {
    setLastname(e.target.value);
  }
  return (
    <>
      <div className="alert alert-primary">
        <p><strong>Name: </strong></p>
        <p>{name}</p>
        <input value={name} onChange={onChangeName} />
      </div>
      <div className="alert alert-primary">
        <p><strong>LastName: </strong></p>
        <p>{lastname}</p>
        <input value={lastname} onChange={onChangeLastname} />
      </div>
    </>
  )
}