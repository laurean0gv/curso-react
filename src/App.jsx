import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './componentes/Layout';
import ListarProductos from './componentes/ListarProductos';
import ProductDetail from './componentes/ProductDetail';
import Carrito from './componentes/Carrito';

const App = () => {
  const [cart, setCart] = useState(() => {
    const guardado = localStorage.getItem('carrito');
    return guardado ? JSON.parse(guardado) : [];
  });

  const [isAuthenticated, setIsAuthenticated] = useState(true); // Simulación

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(cart));
  }, [cart]);

  const agregarAlCarrito = (producto) => {
    setCart((prev) => {
      const existe = prev.find((item) => item.id === producto.id);
      if (existe) {
        return prev.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<ListarProductos onAgregar={agregarAlCarrito} />} />
        <Route path="/producto/:id" element={<ProductDetail onAgregar={agregarAlCarrito} />} />
        <Route
          path="/carrito"
          element={
            isAuthenticated ? <Carrito items={cart} /> : <Navigate to="/" replace />
          }
        />
        <Route path="*" element={<p>404 - Página no encontrada</p>} />
      </Routes>
    </Layout>
  );
};

export default App;
