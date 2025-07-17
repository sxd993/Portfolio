import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = ({ theme, toggleTheme }) => {
  return (
    <header className="header-section">
      <NavLink to="/" className={({ isActive }) => `header-title${isActive ? ' active' : ''}`}>
        <h2>BEA</h2>
      </NavLink>
      <nav className="header-nav">
        <NavLink to="/projects" className={({ isActive }) => `header-link${isActive ? ' active' : ''}`}>
          Проекты
        </NavLink>
        <NavLink to="/contacts" className={({ isActive }) => `header-link${isActive ? ' active' : ''}`}>
          Контакты
        </NavLink>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'dark' ? '🌞' : '🌙'}
        </button>
      </nav>
    </header>
  );
};

export default Header;