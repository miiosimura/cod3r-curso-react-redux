import React from 'react'
import products from '../../data/products'
import './ProductsTable.css'

export default props => {

  function productList() {
    return products.map((product, index) => {
      return (
          <tr key={product.id} className={index % 2 === 0 ? 'Even' : 'Odd'}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>R$ {product.price.toFixed(2)}</td>
          </tr>
      )
    })
  }

  return (
    <div className="ProductsTable">
      <h3>Tabela de Produtos</h3>
      <table>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Preço</th>
        </tr>

        {productList()}
      </table>
    </div>
  )
}