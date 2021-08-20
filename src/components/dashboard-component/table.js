import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {

  },
});

function createData(name, date, type, count, actions) {
  return { name, date, type, count, actions };
}

const rows = [
  createData('Wf182', 2021, 6.0, 24, 4.0),
  createData('Wf1283', 2021, 9.0, 37, 4.3),
  createData('Wf1562', 2021, 16.0, 24, 6.0),
  createData('Wf3526', 2021, 3.7, 67, 4.3),
  createData('Wf1584', 2021, 16.0, 49, 3.9),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Experience Name</TableCell>
            <TableCell align="right">Date Created</TableCell>
            <TableCell align="right">Experience Type</TableCell>
            <TableCell align="right">View Count</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">{row.count}</TableCell>
              <TableCell align="right">{row.actions}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
