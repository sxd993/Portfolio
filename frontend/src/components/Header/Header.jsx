import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Welcome to Our Site</h1>
      <nav className="nav">
        <Link to="/projects" className="nav-button">Проекты</Link>
        <Link to="/contacts" className="nav-button">Контакты</Link>
      </nav>
    </header>
  );
};

export default Header;