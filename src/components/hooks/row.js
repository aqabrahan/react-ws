import React, { useState, useContext, useEffect } from 'react'
import { ThemeContext, LangContext } from './context';

export default function Row(props) {
  const name = useFormInput('Son');
  const lastname = useFormInput('Gohan');
  const width = useWindowWith();
  const theme = useContext(ThemeContext);
  const lang = useContext(LangContext);

  useDocument(name.value + ' ' + lastname.value);

  return (
    <>
      <div className="jumbotron">
          <h1 className="display-4">Hello, world! <strong>HOOKS</strong></h1>
      </div>
      <div className={`alert alert-${theme}`}>
        <p><strong>Name: </strong></p>
        <p>{name.value}</p>
        <input {...name} />
      </div>
      <div className={`alert alert-${theme}`}>
        <p><strong>LastName: </strong></p>
        <p>{lastname.value}</p>
        <input {...lastname} />
      </div>
      <div className="jumbotron">
        you speak: <strong>{lang}</strong>
      </div>
      <div className="jumbotron">
        Window With: <strong>{width}</strong>
      </div>
    </>
  )
}

function useFormInput(initValue) {
  const [value, setValue] = useState(initValue);
  function handlerChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handlerChange
  }
}

function useDocument(title) {
  useEffect(() => {
    document.title = title;
  });
}

function useWindowWith() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const resizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener('resize', resizeWindow);
    return () => {
      window.removeEventListener('resize', resizeWindow);
    }
  });
  return width;
}