import React from 'react';

function Menu({ menuItems, selectedItem, onItemClick }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav flex-column">
          {menuItems.map((item) => (
            <li key={item} className="nav-item">
              <a
                className={`nav-link ${selectedItem === item ? 'active' : ''}`}
                href="#"
                onClick={() => onItemClick(item)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Menu;