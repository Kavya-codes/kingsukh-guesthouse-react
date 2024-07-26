import React from 'react';
import '.src/styles/Component-Specific/Header.module.css'; 

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <img src="/logo.png" alt="Kingsukh Guesthouse Logo" className="logo" />
        <nav className="nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/rooms">Rooms</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
