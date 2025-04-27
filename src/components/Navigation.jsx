// src/components/Navigation.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="mobile-menu-button" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`table ${isMenuOpen ? 'menu-open' : ''}`}>
        <ul>
          <li className="menu-ind">
            <Link to="/cv-parfait_react.js/">Accueil</Link>
          </li>
          <li className="menu-exp">
            <Link to="/cv-parfait_react.js/experience">Experiences professionnelles</Link>
          </li>
          <li className="menu-hob">
            <Link to="/cv-parfait_react.js/loisirs">Loisirs</Link>
          </li>
          <li className="menu-con">
            <Link to="/cv-parfait_react.js/contact">Contactez-moi</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;