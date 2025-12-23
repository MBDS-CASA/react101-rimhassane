import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><Link to="/notes">Notes</Link></li>
        <li><Link to="/etudiants">Etudiants</Link></li>
        <li><Link to="/matieres">Matières</Link></li>
        <li><Link to="/apropos">A propos</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;
