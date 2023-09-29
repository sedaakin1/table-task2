import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {
  Button,
  TextField,
  DialogContentText,
} from '@mui/material';
import UsersDialog from './UsersDialog';


export default function Table({
  rowsParam,
  dialogOpenState,
  dialogHandleClose,
  dialogDataState,
  dialogParamState,
  handleCreateSubmit,
  handleCreateChange,
  tableColumns
}) {
  const [open, setOpen] = React.useState(false);
  const [dialogParam, setDialogParam] = useState("");
  const [dialogData, setDialogData] = useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleDialogOpen = (param, row) => {
    if (param === "edit") {
      setDialogData(row)
    }
    setDialogParam(param)
    handleClickOpen()
  }



  // const updatedLocalStorage = (editedData) => {
  //   const currentData = getDataFromLocalStorage();

  //   const updatedData = currentData.map((item) => {
  //     if (item.id === editedData.id) {
  //       return editedData;
  //     }
  //     return item;
  //   });

  //   localStorage.setItem("data", JSON.stringify(updatedData));
  //   setRows(updatedData);
  // };


  return (
    <div style={{ marginBottom: '30px', width: '100%', maxWidth: "700px", height: "300px" }}>
      <DataGrid
        width={"100%"}
        rows={rowsParam}
        columns={tableColumns}
        sx={{ backgroundColor: 'white', borderRadius: '10px', color: '#808080' }}
      // onCellClick={(params) => {
      //   if (params.field === 'fullName') {
      //     handleFullNameClick(params);
      //   }
      // }}
      />
      <UsersDialog
        open={dialogOpenState}
        handleClose={dialogHandleClose}
        dialogData={dialogDataState}
        dialogParam={dialogParamState}
        handleCreateSubmit={handleCreateSubmit}
        handleCreateChange={handleCreateChange}
      // updatedLocalStorage={updatedLocalStorage}
      />

    </div>
  );
}