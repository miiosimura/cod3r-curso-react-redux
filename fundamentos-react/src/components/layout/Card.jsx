import React from 'react'
import './Card.css'

export default (props) => {
  const cardStyle = {
    backgroundColor: props.color || '#593F62',
    borderColor: props.color || '#593F62'
  }

  return (
    <div className='Card' style={cardStyle}>
      <div className='Title'>{props.title}</div>
      <div className='Content'>
        {props.children}
      </div>
    </div>
  )
}