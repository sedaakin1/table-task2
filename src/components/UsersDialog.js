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
import { AiOutlineDelete } from 'react-icons/ai';

const UsersDialog = ({ open, handleClose, dialogData, dialogParam }) => {
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
          <form>
            <div style={{ padding: "5px" }}>
              <TextField
                label="First Name"
                value={editedUserData.firstName || ""}
                onChange={(e) => handleFieldChange("firstName", e.target.value)}
              />
            </div>
            <div style={{ padding: "5px" }}>
              <TextField
                label="Last Name"
                value={editedUserData.lastName || ""}
                onChange={(e) => handleFieldChange("lastName", e.target.value)}
              />
            </div>
            <div style={{ padding: "5px" }}>
              <TextField
                label="Age"
                value={editedUserData.age || ""}
                onChange={(e) => handleFieldChange("age", e.target.value)}
              />
            </div>
          </form>
        ) : dialogParam === "delete" ? (
          <div>Sil</div>
        ) : null}
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>
          <IoReturnDownBack style={{ fontSize: '25px' }} />
        </Button>
        {dialogParam === "edit" ? (
          <Button onClick={handleEditSubmit}>
            <MdOutlineDone style={{ fontSize: '25px' }} />
          </Button>
        ) : dialogParam === "delete" ? (
          <Button><AiOutlineDelete style={{ fontSize: '24px' }} /></Button>
        ) : null}
      </DialogActions>
    </Dialog>
  );
};

export default UsersDialog;