import React from 'react';
import './Header.scss';

const Header = () => (
  <header className="header">
    <h1>Consulting Data Engineer</h1>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
