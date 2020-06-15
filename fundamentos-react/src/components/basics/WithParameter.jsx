import React from 'react'

export default function WithParameter(props){
  const status = props.score >= 6 ? 'Aprovado' : 'Recuperação'
  return(
    <div>
      <h2>{props.title}</h2>
      <p>{props.name} tem nota {props.score}</p>
      <p>Status: {status}</p>
    </div>
  )
}