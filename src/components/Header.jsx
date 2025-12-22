import emsiLogo from '../assets/logoEmsi.PNG';

function Header() {
  return (
    <header className="bg-primary text-white py-4 shadow">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-3 text-center mb-3 mb-md-0">
            <img
              src={emsiLogo}
              className="img-fluid rounded"
              alt="EMSI Logo"
              style={{ maxWidth: '150px', height: 'auto' }}
            />
          </div>
          <div className="col-md-9 text-center text-md-start">
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