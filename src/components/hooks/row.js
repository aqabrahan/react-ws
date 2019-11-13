import React, { useState, useContext, useEffect, useReducer } from 'react'
import { ThemeContext, LangContext } from './context';
const initialState = {
  tasks: [
    { id: 1, name: "Go Office", done: false },
    { id: 2, name: "On Vacation", done: false },
    { id: 3, name: "Send email", done: false },
    { id: 4, name: "Go to Gym", price: false }
  ]
};
export default function Row(props) {
  const name = useFormInput('Son');
  const lastname = useFormInput('Gohan');
  const width = useWindowWith();
  const theme = useContext(ThemeContext);
  const lang = useContext(LangContext);
  const [state, dispatch] = useReducer(reducer, initialState);
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
        <h2>useReducer Tasks</h2>
        <ul className="list-group">
          {state.tasks.map((t, k) => {
            return <li key={k} className="list-group-item">
              <span className={`${t.done ? 'done' :''}`}>{t.name}</span>
              {' '}
              <button onClick={() => dispatch({type: 'done', id: t.id})} className="btn btn-danger btn-sm pull-right">Done</button>
              <button onClick={() => dispatch({type: 'delete', id: t.id})} className="btn btn-danger btn-sm pull-right">Delete</button>
            </li>
          })}

        </ul>
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

function reducer(state, action) {
  switch (action.type) {
    case 'done':
      return {
        ...state,
        tasks: state.tasks.map((v, i) => {
          if (v.id === action.id) {
            return {
              ...v,
              done: true
            }
          } else {
            return v
          }
        })
      };
    case 'delete':
      return {
        ...state,
        tasks: state.tasks.filter(t => t.id !== action.id)
      };
    default:
      throw new Error();
  }
}
