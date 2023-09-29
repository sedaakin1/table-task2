import * as React from 'react';
import { TextField, Button, InputBase } from '@mui/material';
import { styled as styledComp } from 'styled-components';
import { styled, alpha } from '@mui/material/styles';
import { AiOutlineSearch } from 'react-icons/ai';

const Container = styledComp.div`
display: flex;
flex-direction: column;
gap: 5px;
width: 100%;
height: 80px;
`;

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '20px',
  backgroundColor: 'white',
  marginLeft: 0,
  width: '100%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'theme.palette.common.white',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '100ch',
    },
  },
}));

const SearchInput = ({ stateParam, setState, createUser }) => {
  return (
    <Container>
      <div style={{ fontSize: "16px", paddingLeft: "5px", color: "#808080" }}>
        Users
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <Search>
            <SearchIconWrapper>
              <AiOutlineSearch />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Press / to search"
              inputProps={{ 'aria-label': 'search' }}
              value={stateParam}
              onChange={setState}
            />
          </Search>
        </div>
        <Button size='small' variant='text' onClick={createUser}>Create User</Button>
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
