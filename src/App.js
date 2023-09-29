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

  const [rows, setRows] = useState([])
  const [filteredRows, setFilteredRows] = useState([])
  const [searchState, setSearchState] = useState("")

  const [dialogOpenState, setDialogOpenState] = useState(false)
  const [dialogDataState, setDialogDataState] = useState({})
  const [dialogParamState, setDialogParamState] = useState("")

  // table

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
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 200,
    //   valueGetter: (params) =>
    //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    //   cellClassName: 'fullNameCell',
    //   flex: 1
    // },
    {
      field: 'id',
      headerAlign: 'right',
      align: "right",
      headerName: 'İşlemler',
      flex: 1,
      renderCell: (params) =>
        <div style={{ display: 'flex', gap: '5px' }}>
          <div style={{ color: 'blue', cursor: 'pointer' }} onClick={() => console.log("edit", params.row)}>
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
      id: Math.floor(Math.random() * 1000).toString(),
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

  // edit user ---

  // delete user
  const handleDeleteUser = (params) => {
    console.log(params)
  }

  // delete user ---

  const handleChange = (event) => {
    setSearchState(event.target.value)
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
  // }

  const getDataFromLocalStorage = () => {
    const data = localStorage.getItem("data")
    data && setDataToState(JSON.parse(data))
  }

  const setDataToState = (values) => {
    setRows(values)
    setFilteredRows(values)
  }

  useEffect(() => {

    getDataFromLocalStorage()

  }, [])

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
              tableColumns={columns}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
