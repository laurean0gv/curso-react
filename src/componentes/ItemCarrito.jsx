import React from 'react';

const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />
      <div>
        <p>{item.title}</p>
        <p>Cantidad: {item.cantidad}</p>
        <p>Subtotal: ${(item.price * item.cantidad).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartItem;
