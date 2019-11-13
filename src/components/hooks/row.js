import React, { useState, useContext, useEffect, useRef } from 'react'
import { ThemeContext, LangContext } from './context';

export default function Row(props) {
  const [name, setName] = useState('Son')
  const [lastname, setLastname] = useState('Gohan')
  const [width, setWidth] = useState(window.innerWidth);

  const theme = useContext(ThemeContext);
  const lang = useContext(LangContext);

  const inputElement = useRef(null);

  const onChangeName = (e) => {
    setName(e.target.value);
  }
  const onChangeLastname = (e) => {
    setLastname(e.target.value);
  }

  useEffect(() => {
    document.title = name + ' ' + lastname;
  });

  useEffect(() => {
    const resizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener('resize', resizeWindow);
    return () => {
      window.removeEventListener('resize', resizeWindow);
    }
  });

  const onFocus = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <div className="jumbotron">
          <h1 className="display-4">Hello, world! <strong>HOOKS</strong></h1>
      </div>
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
      <div className="jumbotron">
        Window With: <strong>{width}</strong>
      </div>
      <div className="jumbotron">
        Input useRef
        <button className="btn btn-danger" onClick={onFocus}>onFocus</button>
        <p><input type="text" ref={inputElement} /></p>
      </div>
    </>
  )
}