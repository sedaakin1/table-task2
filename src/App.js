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
  const handleChange = (event) => {
    setSearchState(event.target.value)
  }

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
  }

  const getDataFromLocalStorage=() => {
    const data = localStorage.getItem("data")
    data && setDataToState(JSON.parse(data))
  }
  const setDataToState=(values) => {
    setRows(values)
    setFilteredRows(values)
  }

  useEffect(() => {
    getDataFromLocalStorage()
  }, []
  )

  return (
    <div style={{height: "100vh", display: "flex", flexDirection: "column", background: "linear-gradient(to bottom, rgba(238,240,250,1) 15%, rgba(222,235,252,1) 50%, rgba(208,227,246,1) 92%)" }}>
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
            <BasicCard data={[]}/>
            <SearchInput stateParam={searchState} setState={handleChange} />
            <Table rowsParam={rows} updatedLocalStorage={updatedLocalStorage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
