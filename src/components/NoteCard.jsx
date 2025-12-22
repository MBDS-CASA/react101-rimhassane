import React from 'react';

function NoteCard({ note }) {
  if (!note) {
    return <div className="alert alert-warning">Aucune note sélectionnée</div>;
  }

  const getGradeColor = (grade) => {
    if (grade >= 90) return 'success';
    if (grade >= 70) return 'primary';
    if (grade >= 50) return 'warning';
    return 'danger';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-header bg-primary text-white">
        <h5 className="card-title mb-0">
          <i className="fas fa-graduation-cap me-2"></i>
          Détails de la Note
        </h5>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-6">
            <h6 className="text-muted mb-3">
              <i className="fas fa-book me-2"></i>
              Cours
            </h6>
            <p className="h5 text-primary mb-4">{note.course}</p>

            <h6 className="text-muted mb-3">
              <i className="fas fa-calendar me-2"></i>
              Date
            </h6>
            <p className="mb-0">{formatDate(note.date)}</p>
          </div>

          <div className="col-md-6">
            <h6 className="text-muted mb-3">
              <i className="fas fa-user me-2"></i>
              Étudiant
            </h6>
            <div className="mb-4">
              <p className="mb-1">
                <strong>{note.student.firstname} {note.student.lastname}</strong>
              </p>
              <p className="text-muted small mb-0">ID: {note.student.id}</p>
            </div>

            <h6 className="text-muted mb-3">
              <i className="fas fa-star me-2"></i>
              Note
            </h6>
            <div className={`alert alert-${getGradeColor(note.grade)} d-flex align-items-center`}>
              <i className="fas fa-trophy me-2"></i>
              <span className="h4 mb-0">{note.grade}/100</span>
            </div>
          </div>
        </div>

        <div className="mt-3 pt-3 border-top">
          <small className="text-muted">
            <i className="fas fa-hashtag me-1"></i>
            ID unique: {note.unique_id}
          </small>
        </div>
      </div>
    </div>
  );
}

export default NoteCard;