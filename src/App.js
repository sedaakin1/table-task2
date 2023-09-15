import React, { useState } from 'react';
import styled from "styled-components";
import Sidenav from "./Sidenav";
import Navbar from './Navbar';
import BasicCard from './BasicCard';
import SearchInput from './SearchInput';
import Table from './Table';


const initialRows = [
  { id: 1, lastName: 'Otwell', firstName: 'Taylor', age: 35 },
  { id: 2, lastName: 'Hemphill', firstName: 'David', age: 42 },
  { id: 3, lastName: 'Said', firstName: 'Mohamed', age: 45 },
  { id: 4, lastName: 'Landsman', firstName: 'Ian', age: 16 },
  { id: 5, lastName: 'Vints', firstName: 'Dries', age: 80 },
  { id: 6, lastName: 'Archer', firstName: 'Jess', age: 50 },
  { id: 7, lastName: 'Zaki', firstName: 'Mior', age: 44 },
];

const StyledDiv = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to bottom, rgba(238,240,250,1) 15%, rgba(222,235,252,1) 50%, rgba(208,227,246,1) 92%);
  display: flex;
  flex-direction: column;
  align-items : start;
  justify-content: flex-start; 
  font-family: 'Nunito Sans', sans-serif;
`;



function App() {
  const [rows, setRows] = useState(initialRows)
  const [searchState, setSearchState] = useState("")
  const handleChange = (event) => {
    setSearchState(event.target.value)
  }
  return (

    <StyledDiv>
      <Navbar />
      <div style={{
        display: "flex",
        width: "100vw",
        height: "calc(100vh - 64px)",
      }}>
        <Sidenav />
        <div style={{
          display: "flex",
          width: "calc(100vw - 260px)",
          height: "calc(100vh - 64px)",
          flexDirection: "column",
          padding: "20px",
          gap: "40px"
        }}>
          <BasicCard />
          <SearchInput stateParam={searchState} setState={ handleChange }/>
          <Table rowsParam={rows} 
  
          />
        </div>
      </div>
      
    
      
    </StyledDiv>

  );
};

export default App;
