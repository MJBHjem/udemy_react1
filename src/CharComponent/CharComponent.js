import React from 'react'

const charComponent = ({ char, onCk }) => {
  const style = {
    textAlign: 'center',
    display: 'inline-block',
    padding: '16px',
    margin: '16px',
    border: '1px solid black'
  }

  return <div style={style} onClick={onCk}>{char}</div>
}

export default charComponent
