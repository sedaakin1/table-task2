import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const logoDataURL = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjMiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyMyAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5LjMzNjEgNi40ODAwM0MyMC4yMjExIDcuMzY4MSAyMC45MjQ0IDguNDI1OTEgMjEuNDA1MyA5LjU5MjMxQzIxLjg4NjIgMTAuNzU4NyAyMi4xMzUyIDEyLjAxMDYgMjIuMTM4IDEzLjI3NTVDMjIuMTQwNyAxNC41NDA1IDIxLjg5NzEgMTUuNzkzNSAyMS40MjEyIDE2Ljk2MkMyMC45NDUzIDE4LjEzMDUgMjAuMjQ2NiAxOS4xOTE1IDE5LjM2NTUgMjAuMDgzNUMxOC4yNzUxIDIxLjE5MDEgMTYuOTgxMSAyMi4wNjcgMTUuNTU3NiAyMi42NjQxQzE0LjEzNCAyMy4yNjEyIDEyLjYwODcgMjMuNTY2OSAxMS4wNjkgMjMuNTYzNUM5LjM1ODIgMjMuNTY3NCA3LjY2NzI5IDIzLjE4OTggNi4xMTUxOCAyMi40NTcyQzQuNTYzMDcgMjEuNzI0NyAzLjE4NzQ1IDIwLjY1NSAyLjA4NTAyIDE5LjMyMzNDNi42Nzg5OSAyMy4xODYgMTMuNTIwNiAyMi45NDM0IDE3LjgzMzUgMTguNTk4MUMxOC41MjM2IDE3LjkwNTUgMTkuMDcxNiAxNy4wODAyIDE5LjQ0NTYgMTYuMTcwMUMxOS44MTk2IDE1LjI2MDEgMjAuMDEyMyAxNC4yODM1IDIwLjAxMjMgMTMuMjk3QzIwLjAxMjMgMTIuMzEwNSAxOS44MTk2IDExLjMzMzkgMTkuNDQ1NiAxMC40MjM5QzE5LjA3MTYgOS41MTM4MiAxOC41MjM2IDguNjg4NTIgMTcuODMzNSA3Ljk5NTkyQzE0LjkyNzYgNS4wNjc5MiAxMC4yMTY0IDUuMDY3OTIgNy4zMTA1MSA3Ljk5NTkyQzcuMDE0NiA4LjI5MjczIDYuNzc5NjEgOC42NDY0NiA2LjYxOTIyIDkuMDM2NTRDNi40NTg4MyA5LjQyNjYyIDYuMzc2MjQgOS44NDUyNyA2LjM3NjI0IDEwLjI2ODFDNi4zNzYyNCAxMC42OTEgNi40NTg4MyAxMS4xMDk3IDYuNjE5MjIgMTEuNDk5N0M2Ljc3OTYxIDExLjg4OTggNy4wMTQ2IDEyLjI0MzUgNy4zMTA1MSAxMi41NDA0QzcuOTExNDcgMTMuMTQzNSA4LjcyMTUgMTMuNDgxNiA5LjU2NTQzIDEzLjQ4MTZDMTAuNDA5NCAxMy40ODE2IDExLjIxOTQgMTMuMTQzNSAxMS44MjA0IDEyLjU0MDRDMTIuMDIwNyAxMi4zMzkzIDEyLjI5MDcgMTIuMjI2NiAxMi41NzIgMTIuMjI2NkMxMi44NTMzIDEyLjIyNjYgMTMuMTIzMyAxMi4zMzkzIDEzLjMyMzYgMTIuNTQwNEMxMy40MjIxIDEyLjYzOTIgMTMuNTAwMiAxMi43NTcxIDEzLjU1MzYgMTIuODg2OUMxMy42MDY5IDEzLjAxNjggMTMuNjM0NCAxMy4xNTYyIDEzLjYzNDQgMTMuMjk3QzEzLjYzNDQgMTMuNDM3OCAxMy42MDY5IDEzLjU3NzIgMTMuNTUzNiAxMy43MDcxQzEzLjUwMDIgMTMuODM2OSAxMy40MjIxIDEzLjk1NDggMTMuMzIzNiAxNC4wNTM2QzEyLjMyMjEgMTUuMDU4NiAxMC45NzIyIDE1LjYyMiA5LjU2NTc1IDE1LjYyMkM4LjE1OTM1IDE1LjYyMiA2LjgwOTQ0IDE1LjA1ODYgNS44MDc4NiAxNC4wNTM2QzUuMzE1MDQgMTMuNTU4OSA0LjkyMzcxIDEyLjk2OTUgNC42NTY2MSAxMi4zMTk1QzQuMzg5NTEgMTEuNjY5NSA0LjI1MTk3IDEwLjk3MiA0LjI1MTk3IDEwLjI2NzVDNC4yNTE5NyA5LjU2Mjk1IDQuMzg5NTEgOC44NjU0MyA0LjY1NjYxIDguMjE1NDdDNC45MjM3MSA3LjU2NTUgNS4zMTUwNCA2Ljk3NjA0IDUuODA3ODYgNi40ODEzM0M5LjU0MjgxIDIuNzE1OTIgMTUuNTk5OSAyLjcxNTkyIDE5LjMzNjEgNi40ODEzM1Y2LjQ4MDAzWk0xMS4wNjkgMi44NTc3N2UtMDVDMTIuNzc5OCAtMC4wMDM3ODM5OCAxNC40NzA3IDAuMzczOTI0IDE2LjAyMjcgMS4xMDY1OUMxNy41NzQ3IDEuODM5MjYgMTguOTUwMiAyLjkwOTExIDIwLjA1MjQgNC4yNDA4OUMxNS40NTc4IDAuMzc4MTkxIDguNjE1NjEgMC42MjE0MzQgNC4zMDUyMSA0Ljk2NDE0VjQuOTY1NDNDMy42MTUwMSA1LjY1ODA1IDMuMDY2OTUgNi40ODMzOSAyLjY5Mjg2IDcuMzkzNDlDMi4zMTg3NyA4LjMwMzU5IDIuMTI2MTMgOS4yODAyOSAyLjEyNjEzIDEwLjI2NjhDMi4xMjYxMyAxMS4yNTM0IDIuMzE4NzcgMTIuMjMwMSAyLjY5Mjg2IDEzLjE0MDJDMy4wNjY5NSAxNC4wNTAzIDMuNjE1MDEgMTQuODc1NiA0LjMwNTIxIDE1LjU2ODJDNy4yMDk4MiAxOC40OTY5IDExLjkyMDQgMTguNDk2OSAxNC44MjYzIDE1LjU2ODJDMTUuMTIyMSAxNS4yNzE0IDE1LjM1NyAxNC45MTc4IDE1LjUxNzMgMTQuNTI3N0MxNS42Nzc3IDE0LjEzNzcgMTUuNzYwMiAxMy43MTkxIDE1Ljc2MDIgMTMuMjk2NEMxNS43NjAyIDEyLjg3MzYgMTUuNjc3NyAxMi40NTUgMTUuNTE3MyAxMi4wNjVDMTUuMzU3IDExLjY3NDkgMTUuMTIyMSAxMS4zMjEzIDE0LjgyNjMgMTEuMDI0NUMxNC4yMjUzIDEwLjQyMTQgMTMuNDE1MyAxMC4wODMyIDEyLjU3MTQgMTAuMDgzMkMxMS43Mjc0IDEwLjA4MzIgMTAuOTE3NCAxMC40MjE0IDEwLjMxNjQgMTEuMDI0NUMxMC4xMTYxIDExLjIyNTMgOS44NDYyNyAxMS4zMzc5IDkuNTY1MTIgMTEuMzM3OUM5LjI4Mzk2IDExLjMzNzkgOS4wMTQwOSAxMS4yMjUzIDguODEzNzkgMTEuMDI0NUM4LjcxNTI2IDEwLjkyNTYgOC42MzcwMiAxMC44MDc3IDguNTgzNjEgMTAuNjc3OEM4LjUzMDIxIDEwLjU0NzggOC41MDI3MSAxMC40MDgzIDguNTAyNzEgMTAuMjY3NUM4LjUwMjcxIDEwLjEyNjYgOC41MzAyMSA5Ljk4NzE3IDguNTgzNjEgOS44NTcyMkM4LjYzNzAyIDkuNzI3MjcgOC43MTUyNiA5LjYwOTQyIDguODEzNzkgOS41MTA1MUM5LjgxNTM3IDguNTA1NTMgMTEuMTY1MyA3Ljk0MjE0IDEyLjU3MTcgNy45NDIxNEMxMy45NzgxIDcuOTQyMTQgMTUuMzI4IDguNTA1NTMgMTYuMzI5NiA5LjUxMDUxQzE2LjgyMjQgMTAuMDA1MiAxNy4yMTM3IDEwLjU5NDcgMTcuNDgwOCAxMS4yNDQ3QzE3Ljc0NzkgMTEuODk0NiAxNy44ODU1IDEyLjU5MjEgMTcuODg1NSAxMy4yOTY3QzE3Ljg4NTUgMTQuMDAxMiAxNy43NDc5IDE0LjY5ODcgMTcuNDgwOCAxNS4zNDg3QzE3LjIxMzcgMTUuOTk4NyAxNi44MjI0IDE2LjU4ODEgMTYuMzI5NiAxNy4wODI4QzEyLjU5NCAyMC44NDgyIDYuNTM2ODggMjAuODQ4MiAyLjgwMDY1IDE3LjA4MjhDMS45MTQ1NiAxNi4xOTM0IDEuMjEwNzIgMTUuMTMzOSAwLjcyOTkyNSAxMy45NjU1QzAuMjQ5MTI5IDEyLjc5NzIgMC4wMDA5NDU2NDQgMTEuNTQzNCAtMC4wMDAyMzk4NzMgMTAuMjc2N0MtMC4wMDE0MjUzOSA5LjAxIDAuMjQ0NDExIDcuNzU1NjcgMC43MjMwMTggNi41ODY0MUMxLjIwMTYzIDUuNDE3MTUgMS45MDM0OCA0LjM1NjIyIDIuNzg3OTEgMy40NjUxMUM0Ljk4ODY1IDEuMjM5NTUgNy45NjY4IC0wLjAwNjYwMzQzIDExLjA2OSAyLjg1Nzc3ZS0wNVYyLjg1Nzc3ZS0wNVoiIGZpbGw9IiMyRjgwRUQiLz4KPC9zdmc+Cg=='


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '20px',
  backgroundColor: '#eceff1',
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(30),
    width: 'auto',
  },
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

export default function Navbar() {
  return (
    <Box sx={{ height:"64px"}}>
      <AppBar position="fixed" sx={{
        
         backgroundColor: '#fff', color: '#000', marginTop: '0px' }}>
        <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={logoDataURL} alt="Logo" style={{ width: '30px', height: '30px', marginLeft: '10px' }} />
          <Typography
            variant="h6"
            noWrap
            component="div"
                        
          >
            PROTERA CRM
          </Typography>
        </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Press / to search"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}