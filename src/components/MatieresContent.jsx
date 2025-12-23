import React from 'react';
import data from '../../data.json';

function MatieresContent() {
  // Extract unique courses
  const uniqueCourses = [...new Set(data.map(note => note.course))];

  return (
    <div className="container mt-4">
      <h3>Matières</h3>
      <div className="row">
        {uniqueCourses.map((course, index) => (
          <div key={index} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{course}</h5>
                <p className="card-text">
                  <strong>Matière:</strong> {course}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MatieresContent;