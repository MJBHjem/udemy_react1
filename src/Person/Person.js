import React from 'react'
import './Person.css'

const person = props => {
  return (
    <div className='Person'>
      <h1 onClick={props.onDelItem}>
        Hello I'm {props.name}, I'm {props.age}
      </h1>

      <p>{props.children}</p>
      <input type='text' value={props.name} onChange={props.onChangeName} />
    </div>
  )
}
export default person
