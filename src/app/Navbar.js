import React from 'react';

const Navbar = ({ cartItemCount, onCartClick }) => {
  return (
    <nav className="navbar bg-green-900">
      <div className="logo">GO FOOD</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#groceries">Groceries</a></li>
        <li><a href="#pages">Pages</a></li>
        <li><a href="#connect">Connect with Us</a></li>
      </ul>
      <div className="icons">
        <span className="icon">🔍</span>
        <span className="icon" onClick={onCartClick}>🛒 {cartItemCount}</span>
        <span className="icon">👤</span>
      </div>
    </nav>
  );
};

export default Navbar;
