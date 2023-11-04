import React from 'react';
import CartWidget from '../CartWidget/CartWidget.jsx'

export const NavBar = () =>{
  return (
    <nav className="navbar">
      <a href="">Inicio</a>
      <a href="">Zapatillas</a>
      <a href="">Camisetas</a>
      <a href="">Buzos</a>
      <a href="" id="carrito"><CartWidget />7</a>
    </nav>
  );
}

export default NavBar;
