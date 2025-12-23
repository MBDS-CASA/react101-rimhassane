import React, { useState, useEffect } from 'react';

function HomeContent() {
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
    <div className="container mt-4 fade-in">
      <div className="row">
        <div className="col-12 text-center mb-5">
          <h1 className="display-4 text-primary">
            <i className="fas fa-graduation-cap me-3"></i>
            TD03 - Gestion des Notes
          </h1>
          <h2 className="text-primary">
            Bonjour, on est le {jourSemaine}, {jour} {moisNom} {annee}
          </h2>
          <h3 className="h4 text-muted">{heures}:{minutes}:{secondes}</h3>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;