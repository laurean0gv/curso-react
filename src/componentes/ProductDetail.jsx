import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = ({ onAgregar }) => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerProducto = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) throw new Error('Producto no encontrado');
        const data = await res.json();
        setProducto(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    obtenerProducto();
  }, [id]);

  if (loading) return <p>Cargando producto...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!producto) return null;

  return (
    <div className="product-detail">
      <img src={producto.image} alt={producto.title} />
      <h2>{producto.title}</h2>
      <p>{producto.description}</p>
      <p><strong>${producto.price}</strong></p>
      <button onClick={() => onAgregar(producto)}>Agregar al carrito</button>
    </div>
  );
};

export default ProductDetail;
