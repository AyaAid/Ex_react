import React from 'react';
import Product from './Product';
import "../style/ProductList.css"

interface ProductProps {
  id: number;
  name: string;
  price: number;
}

function ProductList() {

  const products: ProductProps[] = [
    { id: 1, name: 'Produit 1', price: 10 },
    { id: 2, name: 'Produit 2', price: 15 },
    { id: 3, name: 'Produit 3', price: 20 },
    { id: 4, name: 'Produit 4', price: 25 },
  ];

  return (
    <div className="product-list">
      <h2 className="list-title">Liste de Produits</h2>
      <ul>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}


export default ProductList;
