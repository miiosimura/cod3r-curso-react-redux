import React from 'react'
import './App.css'

import Card from './components/layout/Card'

import First from './components/basics/First'
import WithParameter from './components/basics/WithParameter'
import Random from './components/basics/Random'
import Family from './components/basics/Family'
import FamilyMember from './components/basics/FamilyMember'
import StudentsList from './components/repeticao/StudentsList'
import ProductsTable from './components/repeticao/ProductsTable'
import EvenOrOdd from './components/conditional/EvenOrOdd'
import UserInfo from './components/conditional/UserInfo'

//export default function App(props){   -> forma completa
export default _ => {
  return (
    <div className="App">
      <h1>Fundamentos de React</h1>

      <div className="Cards">
        <Card title='#7 - Renderização condicional'>
          <EvenOrOdd number={21}></EvenOrOdd>
          <UserInfo user={{name: 'Maria'}} />
          <UserInfo />
        </Card>

        <Card title='#6 - Repetição Desafio' color="#8499B1">
          <ProductsTable/>
        </Card>

        <Card title='#5 - Repetição' color="#DE6C83">
          <StudentsList></StudentsList>
        </Card>

        <Card title='#4 - Componente com filhos'>
          <Family lastName='Pereira'>
            <FamilyMember firstName='João' />
            <FamilyMember firstName='Felipe' />
            <FamilyMember firstName='Mariana' />
           </Family>
        </Card>

        <Card title='#3 - Desafio Aleatório' color="#8499B1">
          <Random min={1} max={10}/>
        </Card>

        <Card title='#2 - Função com parâmetros' color="#DE6C83">
          <WithParameter
            title='Situação do Aluno'
            name='Pedro'
            score={9.5}/>
        </Card>

        <Card title='#1 - Função Simples + Fragmento'>
          <First/>
        </Card>
      </div>
    </div>
  )
}