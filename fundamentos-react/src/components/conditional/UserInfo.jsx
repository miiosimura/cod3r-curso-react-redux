import React from 'react'
import If, {Else} from './If'

export default props => {
  const user = props.user || {}
  return (
    <div>
      {/* <If test={user && user.name}>
        Seja bem vindo(a) <strong>{ user.name }</strong>!
      </If>
      <If test={!user || !user.name}>
        Seja bem vindo(a) <strong>Anônimo</strong>!
      </If> */}

      <If test={user && user.name}>
        Seja bem vindo(a) <strong>{ user.name }</strong>!
        <Else>
          Seja bem vindo(a) <strong>Anônimo</strong>!
        </Else>
      </If>
    </div>
  )
}