import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from '@mui/material';
import { IoReturnDownBack } from 'react-icons/io5';
import { MdOutlineDone } from 'react-icons/md';
import { AiOutlineDelete, AiOutlineUsergroupAdd } from 'react-icons/ai';

const UsersDialog = ({
  open,
  handleClose,
  dialogData,
  dialogParam,
  handleCreateSubmit,
  handleCreateChange,
  handleDelete
}) => {

  const [editedUserData, setEditedUserData] = useState({ firstName: "", lastName: "", age: "" });

  const handleFieldChange = (fieldName, value) => {
    setEditedUserData({ ...editedUserData, [fieldName]: value });
  };

  const handleEditSubmit = () => {
    console.log("Düzenleme verisi:", editedUserData);
    handleClose();
  };


  useEffect(() => {
    if (dialogParam === "edit" && dialogData) {
      setEditedUserData(dialogData);
    }
  }, [dialogParam, dialogData]);



  return (
    <Dialog open={open} onClose={handleClose}>

      <DialogTitle>İşlemler</DialogTitle>

      <DialogContent>
        {dialogParam === "edit" ? (
          <form style={{display: 'flex', flexDirection: 'column', gap: '10px', padding: '5px'}}>
          <div>
              <TextField
                label="id"
                value={editedUserData.id || ""}
                disabled = {true}
              />
            </div>
            <div>
              <TextField
                label="First Name"
                value={editedUserData.firstName || ""}
                onChange={(e) => handleFieldChange("firstName", e.target.value)}
              />
            </div>
            <div>
              <TextField
                label="Last Name"
                value={editedUserData.lastName || ""}
                onChange={(e) => handleFieldChange("lastName", e.target.value)}
              />
            </div>
            <div>
              <TextField
                label="Age"
                value={editedUserData.age || ""}
                onChange={(e) => handleFieldChange("age", e.target.value)}
              />
            </div>
          </form>
        ) : dialogParam === "delete" ? (
          <div>Sil</div>
        ) : dialogParam === "create" ? (
          <form>
            <div style={{ padding: "5px" }}>
              <TextField
                variant="filled"
                size='small'
                label="ID"
                value={dialogData.id}
                disabled={true}
              />
            </div>
            <div style={{ padding: "5px" }}>
              <TextField
                size='small'
                label="First Name"
                name='firstName'
                value={dialogData.firstName}
                onChange={handleCreateChange}
              />
            </div>
            <div style={{ padding: "5px" }}>
              <TextField
                size='small'
                label="Last Name"
                name='lastName'
                value={dialogData.lastName}
                onChange={handleCreateChange}
              />
            </div>
            <div style={{ padding: "5px" }}>
              <TextField
                size='small'
                label="Age"
                name='age'
                value={dialogData.age}
                onChange={handleCreateChange}
              />
            </div>
          </form>
        )
          : null
        }
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>
          <IoReturnDownBack style={{ fontSize: '25px' }} />
        </Button>
        {dialogParam === "create" && <Button onClick={handleCreateSubmit}><AiOutlineUsergroupAdd style={{ fontSize: '25px' }} /></Button>}
        {dialogParam === "edit" && <Button onClick={handleEditSubmit}><MdOutlineDone style={{ fontSize: '25px' }} /></Button>}
        {dialogParam === "delete" && <Button><AiOutlineDelete style={{ fontSize: '24px' }} /></Button>}
      </DialogActions>
      
    </Dialog>
  );
};

export default UsersDialog;