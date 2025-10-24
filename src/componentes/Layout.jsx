import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header>
        <h1>🛒 Mi Tienda React</h1>
        <Navbar />
        <hr />
      </header>
      <main>{children}</main>
      <footer>
        <hr />
        <p>© 2025 Mi Tienda</p>
      </footer>
    </div>
  );
};

export default Layout;
