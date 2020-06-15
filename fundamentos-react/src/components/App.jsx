import React from 'react'
import First from './basics/First'
import WithParameter from './basics/WithParameter'
import Random from './basics/Random'
import Card from './layout/Card'

//export default function App(props){   -> forma completa
export default _ => {
  return (
    <div>
      <h1>Fundamentos de React</h1>
      <Card title='#3 - Desafio Aleatório'>
        <Random min={1} max={10}/>
      </Card>

      <Card title='#2 - Função com parâmetros'>
        <WithParameter
          title='Situação do Aluno'
          name='Pedro'
          score={9.5}/>
      </Card>

      <Card title='#1 - Função Simples com Fragmento'>
        <First/>
      </Card>
    </div>
  )
}