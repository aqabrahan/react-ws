import React, { useState, useContext } from 'react'
import { ThemeContext, LangContext } from './context';

export default function Row(props) {
  const [name, setName] = useState('Son')
  const [lastname, setLastname] = useState('Gohan')
  const theme = useContext(ThemeContext);
  const lang = useContext(LangContext);

  const onChangeName = (e) => {
    setName(e.target.value);
  }
  const onChangeLastname = (e) => {
    setLastname(e.target.value);
  }
  return (
    <>
      <div className={`alert alert-${theme}`}>
        <p><strong>Name: </strong></p>
        <p>{name}</p>
        <input value={name} onChange={onChangeName} />
      </div>
      <div className={`alert alert-${theme}`}>
        <p><strong>LastName: </strong></p>
        <p>{lastname}</p>
        <input value={lastname} onChange={onChangeLastname} />
      </div>
      <div className="jumbotron">
        you speak: <strong>{lang}</strong>
      </div>
    </>
  )
}