import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'firstName', headerName: 'First name', width: 150 },
  { field: 'lastName', headerName: 'Last name', width: 150 },
  { field: 'age', headerName: 'Age', width: 120 },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 200,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    cellClassName: 'fullNameCell',
  },
  { field: 'fsd',
  headerName: 'İşlemler',
  flex: 1,
  renderCell: (params) =>
  <div>A</div>
}
];



// const saveRowsToLocalStorage = (rows) => {
//   localStorage.setItem('rows', JSON.stringify(rows));
// };

export default function Table({ rowsParam }) {
  // const [rows, setRows] = React.useState(() => {
  //   // const savedRows = localStorage.getItem('rows');
  //   return savedRows ? JSON.parse(savedRows) : initialRows;
  // });



  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  // useEffect(() => {
  //   saveRowsToLocalStorage(rows);
  // }, [rows]);


  const handleFullNameClick = (params) => {
    setSelectedPerson(params.row);
    setDialogOpen(true);
  };

  return (
    <div style={{ marginBottom: '30px', width: '100%' }}>
      <DataGrid
        width={"100%"}
        rows={rowsParam}
        columns={columns}
        // initialState={{
        //   pagination: {
        //     paginationModel: { page: 0, pageSize: 7 },
        //   },
        // }}
            
        sx={{ backgroundColor: 'white', borderRadius: '10px', color: '#808080' }}
        onCellClick={(params) => {
          if (params.field === 'fullName') {
            handleFullNameClick(params);
          }
        }}
      />

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Personal Information</DialogTitle>
        <DialogContent>
          {selectedPerson && (
            <div>
              <p>ID: {selectedPerson.id}</p>
              <p>First Name: {selectedPerson.firstName}</p>
              <p>Last Name: {selectedPerson.lastName}</p>
              <p>Age: {selectedPerson.age}</p>
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}