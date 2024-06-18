// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-green-500 p-4 flex justify-between items-center">
      <h1 className="text-white text-3xl">El Rey de Frutos Secos</h1>
      <Link to="/cart" className="text-white">Carrito</Link>
    </header>
  );
}

export default Header;

