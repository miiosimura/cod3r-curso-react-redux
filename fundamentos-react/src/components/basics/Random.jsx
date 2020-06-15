import React from 'react'

export default (props) => {
  const {min, max} = props;
  const aleatorio = parseInt(Math.random() * (max - min + 1)) + min;
  return (
    <div>
      <h2>Valor Aleatório de {min} a {max}</h2>
      <p>{aleatorio}</p>
    </div>
  )
}