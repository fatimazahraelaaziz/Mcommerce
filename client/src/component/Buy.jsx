import React from 'react';

function ProductDetails({ product }) {
  return (
    <div className="card h-100 text-center p-4">
      <img src={product.image} className="card-img-top" alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">Category: {product.category}</p>
        <p className="card-text">Price: $ {product.price}</p>
      </div>
    </div>
  );
}

export default ProductDetails;
