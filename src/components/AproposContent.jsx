import React from 'react';

function AproposContent() {
  return (
    <div className="container mt-4">
      <h3>À propos</h3>
      <div className="card shadow">
        <div className="card-body">
          <h5 className="card-title">EMSI - École Marocaine des Sciences de l'Ingénieur</h5>
          <p className="card-text">
            L'EMSI est une grande école d'ingénieurs au Maroc, reconnue pour son excellence académique
            et son approche innovante dans la formation des ingénieurs.
          </p>
          <p className="card-text">
            Fondée avec pour mission de former des ingénieurs compétents et innovants,
            l'EMSI offre des programmes de qualité dans divers domaines techniques et technologiques.
          </p>
          <p className="card-text">
            <strong>Adresse:</strong> Casablanca, Maroc<br />
            <strong>Site web:</strong> <a href="https://www.emsi.ma" target="_blank" rel="noopener noreferrer">www.emsi.ma</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AproposContent;