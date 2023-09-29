import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {
  Button,
  TextField,
  DialogContentText,
} from '@mui/material';
import UsersDialog from './UsersDialog';


export default function Table({ rowsParam  }) {
  const [open, setOpen] = React.useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [dialogParam, setDialogParam] = useState("");
  const[dialogData, setDialogData] =useState();
  const [rows, setRows] = useState(rowsParam);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setDialogData("")
  };

  const handleDialogOpen = (param, row) => {
  if(param === "edit"){
    setDialogData(row)
  }
    setDialogParam(param)
    handleClickOpen()
  }
console.log(dialogData)
  const columns = [
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      flex: 1
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      flex: 1
    },
    {
      field: 'age',
      headerName: 'Age',
      width: 120,
      flex: 1
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 200,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
      cellClassName: 'fullNameCell',
      flex: 1
    },
    {
      field: 'id',
      headerAlign: 'right',
      align: "right",
      headerName: 'İşlemler',
      flex: 1,
      renderCell: (params) => 
        <div style={{display:'flex', gap: '5px'}}>
          <div style={{ color:'blue', cursor:'pointer'}} onClick={() => handleDialogOpen("edit", params.row)}>
          Düzenle</div>
          <div>|</div>
          <div style={{ color:'red', cursor:'pointer'}} onClick={() => handleDialogOpen("delete")}>
          Sil</div>
        </div>
    },
  ];

  const handleFullNameClick = (params) => {
    setSelectedPerson(params.row);
    
  };

  const getDataFromLocalStorage = () => {
    const savedData = localStorage.getItem('data');
    return savedData ? JSON.parse(savedData) : [];
  };
  

  const updatedLocalStorage = (editedData) => {
    const currentData = getDataFromLocalStorage();

    const updatedData = currentData.map((item) => {
      if (item.id === editedData.id) {
        return editedData;
      }
      return item;
    });

    localStorage.setItem("data", JSON.stringify(updatedData));
    setRows(updatedData);
  };

  const handleEditSubmit = (editedData) => {
    console.log("Düzenleme verisi:", editedData);
    updatedLocalStorage(editedData);
    handleClose();
  };


  return (
    <div style={{ marginBottom: '30px', width: '100%', maxWidth:"700px" }}>
      <DataGrid
        width={"100%"}
        rows={rows}
        columns={columns}

        sx={{ backgroundColor: 'white', borderRadius: '10px', color: '#808080' }}
        onCellClick={(params) => {
          if (params.field === 'fullName') {
            handleFullNameClick(params);
          }
        }}
      />

<UsersDialog open={open} handleClose={handleClose} dialogData={dialogData} dialogParam={dialogParam} updatedLocalStorage={updatedLocalStorage}/>

    </div>
  );
}