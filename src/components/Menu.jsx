import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Menu() {
  const location = useLocation();

  const menuItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Notes', path: '/notes' },
    { name: 'Etudiants', path: '/etudiants' },
    { name: 'Matières', path: '/matieres' },
    { name: 'A propos', path: '/apropos' }
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav flex-column">
          {menuItems.map((item) => (
            <li key={item.path} className="nav-item">
              <Link
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                to={item.path}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Menu;