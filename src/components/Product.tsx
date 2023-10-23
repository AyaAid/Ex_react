import React from "react";
import "../style/ProductList.css"

interface ProductProps {
  product: {
    id: number;
    name: string;
    price: number;
  };
}

function Product({ product }: ProductProps) {
  return (
    <li className="product-item">
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">Prix : ${product.price}</p>
    </li>
  );
}

export default Product;
