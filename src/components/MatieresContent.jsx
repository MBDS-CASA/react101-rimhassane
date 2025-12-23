import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import data from '../data/data.json';

function MatieresContent() {
  // Extract unique courses
  const uniqueCourses = [...new Set(data.map(note => note.course))];

  return (
    <div className="container mt-4">
      <h3>Matières</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="courses table">
          <TableHead>
            <TableRow>
              <TableCell>Course</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {uniqueCourses.map((course, index) => (
              <TableRow key={index}>
                <TableCell>{course}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default MatieresContent;