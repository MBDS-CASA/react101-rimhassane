import emsiLogo from '../assets/logoEmsi.PNG';

function Header() {
  const handleMenuClick = (item) => {
    alert(`Vous avez cliqué sur : ${item}`);
  };

  return (
    <header className="bg-primary text-white py-4 shadow">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-3 text-center mb-3 mb-md-0">
            <nav className="navbar navbar-expand-lg navbar-dark">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link" href="#" onClick={() => handleMenuClick('Notes')}>Notes</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" onClick={() => handleMenuClick('Etudiants')}>Etudiants</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" onClick={() => handleMenuClick('Matières')}>Matières</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" onClick={() => handleMenuClick('A propos')}>A propos</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="col-md-3 text-center mb-3 mb-md-0">
            <img
              src={emsiLogo}
              className="img-fluid rounded"
              alt="EMSI Logo"
              style={{ maxWidth: '150px', height: 'auto' }}
            />
          </div>
          <div className="col-md-6 text-center text-md-start">
            <h1 className="display-5 fw-bold mb-2">
              <i className="fas fa-graduation-cap me-3"></i>
              TD03 - Gestion des Notes
            </h1>
            <h2 className="h4 text-light mb-0">
              Affichage des détails d'une note étudiante
            </h2>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;