import React, { useState, useMemo } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  TablePagination,
  TableSortLabel,
  Box,
  Toolbar
} from '@mui/material';
import data from '../data/data.json';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'course', numeric: false, disablePadding: false, label: 'Course' },
  { id: 'studentName', numeric: false, disablePadding: false, label: 'Student Name' },
  { id: 'studentId', numeric: true, disablePadding: false, label: 'Student ID' },
  { id: 'date', numeric: false, disablePadding: false, label: 'Date' },
  { id: 'grade', numeric: true, disablePadding: false, label: 'Grade' },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

function NotesContent() {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('course');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');

  const processedData = useMemo(() => {
    return data.map(note => ({
      ...note,
      studentName: `${note.student.firstname} ${note.student.lastname}`,
      studentId: note.student.id
    }));
  }, []);

  const filteredData = useMemo(() => {
    return processedData.filter(row =>
      row.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.studentId.toString().includes(searchTerm) ||
      row.date.includes(searchTerm) ||
      row.grade.toString().includes(searchTerm)
    );
  }, [processedData, searchTerm]);

  const sortedData = useMemo(() => {
    return stableSort(filteredData, getComparator(order, orderBy));
  }, [filteredData, order, orderBy]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - sortedData.length) : 0;

  return (
    <div className="container mt-4 fade-in">
      <h3>Notes</h3>
      <Box sx={{ width: '100%' }}>
        <Paper sx={{ width: '100%', mb: 2 }}>
          <Toolbar>
            <TextField
              label="Search"
              variant="outlined"
              size="small"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ minWidth: 300 }}
            />
          </Toolbar>
          <TableContainer>
            <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
              <EnhancedTableHead
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
              />
              <TableBody>
                {sortedData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <TableRow hover key={row.unique_id}>
                      <TableCell>{row.course}</TableCell>
                      <TableCell>{row.studentName}</TableCell>
                      <TableCell align="right">{row.studentId}</TableCell>
                      <TableCell>{row.date}</TableCell>
                      <TableCell align="right">{row.grade}</TableCell>
                    </TableRow>
                  ))}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={sortedData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </div>
  );
}

export default NotesContent;