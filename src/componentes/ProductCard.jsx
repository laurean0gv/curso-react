import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ producto, onAgregar }) => {
  return (
    <div className="product-card">
      <Link to={`/producto/${producto.id}`}>
        <img src={producto.image} alt={producto.title} />
        <h4>{producto.title}</h4>
      </Link>
      <p>${producto.price}</p>
      <button onClick={() => onAgregar(producto)}>Agregar al carrito</button>
    </div>
  );
};

export default ProductCard;
