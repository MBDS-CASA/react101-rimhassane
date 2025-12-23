import emsiLogo from '../assets/logoEmsi.PNG';
import Menu from './Menu.jsx';

function Header() {
  return (
    <header style={{ backgroundColor: '#007bff', color: 'white', padding: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ marginRight: '20px' }}>
          <Menu />
        </div>
        <div style={{ marginRight: '20px' }}>
          <img
            src={emsiLogo}
            alt="EMSI Logo"
            style={{ maxWidth: '100px', height: 'auto' }}
          />
        </div>
        <div>
          <h1>TD03 - Gestion des Notes</h1>
          <h2>Affichage des détails d'une note étudiante</h2>
        </div>
      </div>
    </header>
  );
}

export default Header;