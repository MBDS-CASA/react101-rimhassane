import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import data from '../data/data.json';

function NotesContent() {
  return (
    <div className="container mt-4">
      <h3>Notes</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="notes table">
          <TableHead>
            <TableRow>
              <TableCell>Course</TableCell>
              <TableCell>Student Name</TableCell>
              <TableCell>Student ID</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Grade</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((note) => (
              <TableRow key={note.unique_id}>
                <TableCell>{note.course}</TableCell>
                <TableCell>{note.student.firstname} {note.student.lastname}</TableCell>
                <TableCell>{note.student.id}</TableCell>
                <TableCell>{note.date}</TableCell>
                <TableCell>{note.grade}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default NotesContent;