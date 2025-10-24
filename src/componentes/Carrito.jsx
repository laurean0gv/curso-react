import React from 'react';
import CartItem from './ItemCarrito';

const Cart = ({ items }) => {
  const total = items.reduce((acc, item) => acc + item.price * item.cantidad, 0).toFixed(2);

  return (
    <aside className="cart">
      <h2>Carrito</h2>
      {items.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <p><strong>Total:</strong> ${total}</p>
        </>
      )}
    </aside>
  );
};

export default Cart;
