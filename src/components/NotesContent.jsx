import React from 'react';
import data from '../../data.json';

function NotesContent() {
  return (
    <div className="container mt-4">
      <h3>Notes</h3>
      <div className="row">
        {data.map((note) => (
          <div key={note.unique_id} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{note.course}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {note.student.firstname} {note.student.lastname}
                </h6>
                <p className="card-text">
                  <strong>ID Étudiant:</strong> {note.student.id}<br />
                  <strong>Date:</strong> {note.date}<br />
                  <strong>Note:</strong> {note.grade}/100
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotesContent;