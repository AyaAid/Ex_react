import React from "react";

interface ProductProps {
  product: {
    id: number;
    name: string;
    price: number;
  };
}

function Product({ product }: ProductProps) {
  return (
    <li>
      <h3>{product.name}</h3>
      <p>Prix : {product.price} €</p>
    </li>
  );
}

export default Product;
