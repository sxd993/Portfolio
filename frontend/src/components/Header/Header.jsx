import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header-section">
      <h2 className="header-title">Web</h2>
      <nav className="header-nav">
        <Link to="/projects" className="header-link">Проекты</Link>
        <Link to="/contacts" className="header-link">Контакты</Link>
      </nav>
    </header>
  );
};

export default Header;