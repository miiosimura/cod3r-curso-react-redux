import React from 'react'
import products from '../../data/products'

export default props => {
  const productList = products.map(product => {
    return (
        <tr key={product.id}>
          <th>{product.id}</th>
          <th>{product.name}</th>
          <th>R$ {product.price.toFixed(2)}</th>
        </tr>
    )
  })

  return (
    <div>
      <h3>Tabela de Produtos</h3>
      <table>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Preço</th>
        </tr>

        {productList}
      </table>
    </div>
  )
}