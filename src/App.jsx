import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

function Content() {
  const [count, setCount] = useState(0);
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const jours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
  const mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
                "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

  const jourSemaine = jours[dateTime.getDay()];
  const jour = dateTime.getDate();
  const moisNom = mois[dateTime.getMonth()];
  const annee = dateTime.getFullYear();
  const heures = String(dateTime.getHours()).padStart(2, '0');
  const minutes = String(dateTime.getMinutes()).padStart(2, '0');
  const secondes = String(dateTime.getSeconds()).padStart(2, '0');

  return (
    <main className="main-content">
      Bonjour, on est le {jourSemaine}, {jour} {moisNom} {annee} et il est {heures}:{minutes}:{secondes}
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
      </div>
    </main>
  );
}

function App() {
  return (
    <div id="root">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
