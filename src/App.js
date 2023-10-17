import React, { useEffect, useState } from "react";
import BasicCard from "./components/BasicCard";
import Navbar from "./components/Navbar";
import SearchInput from "./components/SearchInput";
import SidenavLeft from "./components/Sidenav";
import Table from "./components/Table";

// const data = [
//   { id: 1, lastName: 'Otwell', firstName: 'Taylor', age: 34 },
//   { id: 2, lastName: 'Hemphill', firstName: 'David', age: 75 },
//   { id: 3, lastName: 'Said', firstName: 'Mohamed', age: 25 },
//   { id: 4, lastName: 'Landsman', firstName: 'Ian', age: 16 },
//   { id: 5, lastName: 'Vints', firstName: 'Dries', age: 80 },
//   { id: 6, lastName: 'Archer', firstName: 'Jess', age: 50 },
//   { id: 7, lastName: 'Zaki', firstName: 'Mior', age: 22 },
// ];

function App() {

  const dataGridValue = localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : []

  const [rows, setRows] = useState(dataGridValue)
  const [filteredRows, setFilteredRows] = useState(dataGridValue)
  const [searchState, setSearchState] = useState("")

  const [dialogOpenState, setDialogOpenState] = useState(false)
  const [dialogDataState, setDialogDataState] = useState({})
  const [dialogParamState, setDialogParamState] = useState("")

  // table

  const columns = [
    {
      field: 'firstName',
      headerName: 'First name',
      minWidth: 150,
      flex: 1
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      minWidth: 150,
      flex: 1
    },
    {
      field: 'age',
      headerName: 'Age',
      minWidth: 120,
      flex: 1
    },

    {
      field: 'id',
      headerAlign: 'right',
      align: "right",
      headerName: 'İşlemler',
      flex: 1,
      renderCell: (params) =>
        <div style={{ display: 'flex', gap: '5px' }}>
          <div style={{ color: 'blue', cursor: 'pointer' }} onClick={() => handleEditUser(params.row)}>
            Düzenle</div>
          <div>|</div>
          <div style={{ color: 'red', cursor: 'pointer' }} onClick={() => handleDeleteUser(params.row)}>
            Sil</div>
        </div>
    },
  ];

  // create user
  const dialogHandleClose = () => {
    setDialogOpenState(false)
    setDialogDataState({})
  }

  const dialogHandleOpen = () => {
    setDialogOpenState(true)
    setDialogDataState({
      id: localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")).length + 1 : 1,
      firstName: "",
      lastName: "",
      age: ""
    })
    setDialogParamState("create")
  }

  const handleCreateChange = (e) => {
    setDialogDataState({ ...dialogDataState, [e.target.name]: e.target.value })
  }

  const handleCreateSubmit = () => {
    const localStorageData = localStorage.getItem("data")
    const convertedData = localStorageData ? JSON.parse(localStorageData) : []
    convertedData.push(dialogDataState)
    localStorage.setItem("data", JSON.stringify(convertedData))
    getDataFromLocalStorage()
    setDialogOpenState(false)
  }
  // create user ---

  // edit user

  const handleEditUser = (user) => {
    setDialogOpenState(true)

    const localStorageData = localStorage.getItem("data");
    if (localStorageData) {
    const data = JSON.parse(localStorageData);
    const userToEdit = data.find(item => item.id === user.id);
    
    if (userToEdit) {

    setDialogDataState({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      age: user.age
    })
    setDialogParamState("edit")
  }
}
}

  const handleEditSubmit = () => {
    const localStorageData = localStorage.getItem("data");
    if (localStorageData) {
      const data = JSON.parse(localStorageData);
      const updatedData = data.map(item => {
        if (item.id === dialogDataState.id) {
          return dialogDataState; 
        }
        return item;
      });
      
      localStorage.setItem("data", JSON.stringify(updatedData));
      
      getDataFromLocalStorage();
      setDialogOpenState(false);
    }
  }

  const handleEditChange = (e) => {
    if (e.target.name == "id" ) return;
    setDialogDataState({ ...dialogDataState, [e.target.name]: e.target.value })
  }

  // edit user ---

  // delete user
 
  const handleDeleteUser = (params) => {
    // Burada kullanıcıya bir onay iletişimi gösterir ve onaylarsa kullanıcıyı siler
    if (window.confirm("Kullaniciyi silmek istediğinize emin misiniz?")) {
      const localStorageData = localStorage.getItem("data");
      if (localStorageData) {
        const data = JSON.parse(localStorageData);
        const updatedData = data.filter(item => item.id !== params.id);
        localStorage.setItem("data", JSON.stringify(updatedData));
  
        // Veriyi güncelle ve iletişimi kapat
        getDataFromLocalStorage();
        setDialogOpenState(false);
      }
    }
  }

  
  // delete user ---

  const handleChange = (event) => {
    setSearchState(event.target.value)
  }


  const getDataFromLocalStorage = () => {
    const data = localStorage.getItem("data")
    const parsedData = JSON.parse(data)
    if (!parsedData) {
      localStorage.setItem("data", JSON.stringify([]))
      return
    }
    console.log(parsedData)
    setDataToState(parsedData)
  }

  const setDataToState = (values) => {
    setRows(values)
    setFilteredRows(values)
  }

  useEffect(() => {
    const filteredValues = rows.filter((item) => item.firstName.toLowerCase().indexOf(searchState.toLowerCase()) > -1
      || item.lastName.toLowerCase().indexOf(searchState.toLowerCase()) > -1);
    setFilteredRows(filteredValues)
  }, [searchState])

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column", background: "linear-gradient(to bottom, rgba(238,240,250,1) 15%, rgba(222,235,252,1) 50%, rgba(208,227,246,1) 92%)" }}>

      <Navbar />

      <div style={{
        display: "flex",
        justifyContent: "center"
      }}>

        <SidenavLeft />

        <div style={{
          display: "flex",
          flexDirection: "column",
        }}>

          <div style={{ display: "flex", flexDirection: "column", padding: "20px", gap: "40px" }}>

            <BasicCard
              data={[]} />

            <SearchInput
              stateParam={searchState}
              setState={handleChange}
              createUser={dialogHandleOpen}
            />

            <Table
              rowsParam={filteredRows}
              dialogOpenState={dialogOpenState}
              dialogHandleClose={dialogHandleClose}
              dialogDataState={dialogDataState}
              dialogParamState={dialogParamState}
              handleCreateSubmit={handleCreateSubmit}
              handleCreateChange={handleCreateChange}
              handleEditUser={handleEditUser}
              handleEditSubmit={handleEditSubmit}
              handleEditChange={handleEditChange}
              handleDeleteUser={handleDeleteUser}      
              tableColumns={columns}
            />

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
