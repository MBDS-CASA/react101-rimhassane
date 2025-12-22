import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import NoteCard from './components/NoteCard.jsx';
import { getRandomNote } from './utils.js';
import data from '../data.json';

function Content() {
  const [selectedNote, setSelectedNote] = useState(null);
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const handleRandomNote = () => {
    const randomNote = getRandomNote(data);
    setSelectedNote(randomNote);
  };

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
    <main className="container-fluid py-4">
      <div className="row">
        <div className="col-12 text-center mb-4">
          <h2 className="text-primary">
            <i className="fas fa-clock me-2"></i>
            Bonjour, on est le {jourSemaine}, {jour} {moisNom} {annee}
          </h2>
          <p className="h4 text-muted">{heures}:{minutes}:{secondes}</p>
        </div>
      </div>

      <div className="row justify-content-center mb-4">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow">
            <div className="card-body text-center">
              <h5 className="card-title">
                <i className="fas fa-random me-2"></i>
                Sélection d'une note aléatoire
              </h5>
              <p className="card-text text-muted">
                Cliquez sur le bouton ci-dessous pour afficher les détails d'une note sélectionnée aléatoirement parmi {data.length} notes disponibles.
              </p>
              <button
                className="btn btn-primary btn-lg"
                onClick={handleRandomNote}
              >
                <i className="fas fa-dice me-2"></i>
                Sélectionner une note aléatoire
              </button>
            </div>
          </div>
        </div>
      </div>

      {selectedNote && (
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <NoteCard note={selectedNote} />
          </div>
        </div>
      )}
    </main>
  );
}

function App() {
  return (
    <div id="root" className="min-vh-100 d-flex flex-column">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
