import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import data from '../data/data.json';

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
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="students table">
          <TableHead>
            <TableRow>
              <TableCell>Firstname</TableCell>
              <TableCell>Lastname</TableCell>
              <TableCell>ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {uniqueStudents.map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.firstname}</TableCell>
                <TableCell>{student.lastname}</TableCell>
                <TableCell>{student.id}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default EtudiantsContent;