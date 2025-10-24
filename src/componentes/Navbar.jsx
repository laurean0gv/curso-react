import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Inicio</Link>
      <Link to="/carrito">Carrito</Link>
    </nav>
  );
};

export default Navbar;
