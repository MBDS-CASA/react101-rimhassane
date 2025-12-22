import emsiLogo from '../assets/logoEmsi.PNG';

function Header() {
  return (
    <header className="header">
      <img src={emsiLogo} className="logo-emsi" alt="EMSI Logo" />
      <h1>Introduction à React</h1>
      <h2>A la découverte des premières notions de React</h2>
    </header>
  );
}
export default Header;