import React from 'react';
import data from '../../data.json';

function EtudiantsContent() {
  // Extract unique students
  const uniqueStudents = data.reduce((acc, note) => {
    const studentId = note.student.id;
    if (!acc.some(student => student.id === studentId)) {
      acc.push(note.student);
    }
    return acc;
  }, []);

  return (
    <div className="container mt-4">
      <h3>Étudiants</h3>
      <div className="row">
        {uniqueStudents.map((student) => (
          <div key={student.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{student.firstname} {student.lastname}</h5>
                <p className="card-text">
                  <strong>ID Étudiant:</strong> {student.id}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EtudiantsContent;