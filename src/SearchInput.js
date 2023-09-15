import * as React from 'react';
import { TextField, Button } from '@mui/material';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 80px;
`


const SearchInput = ({ stateParam, setState }) => {
  return (
    <Container>
      <div>
        Users
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <TextField size='small' value={stateParam} onChange={setState} />
        <Button size='small' variant='contained'>Create User</Button>
      </div>
    </Container>
  )
}


export default SearchInput;



// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 1),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   color: 'theme.palette.common.white',
// }));


// export default function SearchInput({state, setState}) {
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '100vh',              
//       }}
//     >
//       <Stack spacing={2} sx={{ width: 300, position: 'relative' }}>
//       <Typography variant="h6" sx={{ color: '#000000b3', position: 'absolute', top: '-20px', left: '-200px', transform: 'translateX(-50%)' }}>
//           Users
//         </Typography>
//         <TextField
//         value={state}
//         onChange={setState}

//               label="Search"
//               // InputProps={{

//               //   type: 'search',
//               //   sx: {
//               //       borderRadius: '50px',
//               //       height: '35px',
//               //       backgroundColor: '#fff',
//               //       marginLeft: '-235px',

//               //   },
//               //   startAdornment: (
//               //     <SearchIconWrapper>
//               //       <SearchIcon />
//               //     </SearchIconWrapper>
//               //   ),
//               // }}
//               // InputLabelProps={{
//               //   sx: {
//               //      marginLeft: '-200px',
//               //      top: '18px'

//               //   }
//               // }}
//               size='small'
//             />


//         {/* <Autocomplete
//           freeSolo
//           id="free-solo-demo"
//           options={users.map((option) => option.title)}
//           renderInput={(params) => (
//             <TextField
//               {...params}
//               label="Search"
//               InputProps={{
//                 ...params.InputProps,
//                 type: 'search',
//                 sx: {
//                     borderRadius: '50px',
//                     height: '35px',
//                     backgroundColor: '#fff',
//                     marginLeft: '-235px',

//                 },
//                 startAdornment: (
//                   <SearchIconWrapper>
//                     <SearchIcon />
//                   </SearchIconWrapper>
//                 ),
//               }}
//               InputLabelProps={{
//                 sx: {
//                    marginLeft: '-200px',
//                    top: '18px'

//                 }
//               }}
//             />
//           )}
//         /> */}
//         <Button variant="contained" sx={{ position: 'absolute', right: '-235px' }}>
//           Create User
//         </Button>
//       </Stack>
//     </Box>
//   );
// }


const users = [
  { title: 'Taylor Otwell' },
  { title: 'David Hemphill' },
  { title: 'Mohamed Said' },
  { title: 'Ian Landsman' },
  { title: 'Dries Vints' },
  { title: "Jess Archer" },
  { title: 'Mior Zaki' },
];
