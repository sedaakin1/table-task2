import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SourceRoundedIcon from '@mui/icons-material/SourceRounded';
import {RxDashboard} from "react-icons/rx";
import {BiHomeAlt} from "react-icons/bi"


const drawerWidth = 240;

const menuItems = [
  {
    headerName: "Dashboard",
    icon: <RxDashboard />,
    subHeaders: [
      {
        headerName: 'Resources'
      },
      {
        headerName: 'Adresses'
      },
      {
        headerName: 'Comments'
      },
      {
        headerName: 'Posts'
      },
      {
        headerName: 'Purchases'
      },
      {
        headerName: 'Roles'
      },
      {
        headerName: 'Tags'
      },
      {
        headerName: 'Users'
      }      
    ]
  },
  {
    headerName: "Main",
    icon: <BiHomeAlt/>,
    subHeaders: [
      {
        headerName: 'Tags'
      },
      {
        headerName: 'Users'
      }
    ]
  }
]


export default function SidenavLeft() {
  return (
//     <Box sx={{ display: 'flex', paddingTop: '20px', width: '260px', minWidth: '260px'}}>
//       <CssBaseline />
     
//       <div
//         style={{
//           width: drawerWidth,
//           flexShrink: 0,
//           '& .MuiDrawer-paper': {
//             width: drawerWidth,
//             boxSizing: 'border-box',
//             background: 'transparent',
//             marginLeft:'20px',
            
//             border: 'none',
//             borderRadius: '10px'
//           },
//         }}
//         variant="permanent"
//         anchor="left"
//       >
//         <Toolbar />
//         <List>
//   {['Dashboards', 'Main', 'User Insights'].map((text, index) => (
//     <ListItem key={text} disablePadding>
//       <ListItemButton>
//         {text === 'Dashboards' || text === 'Resources' ? (
//           <ListItemIcon>
//             {index % 2 === 0 ? <GridViewOutlinedIcon /> : <SourceRoundedIcon />}
//           </ListItemIcon>
//         ) : null}
//         <ListItemText
//           primary={text}
//           sx={{
//             color: '#808080',
//             marginLeft: text === 'Dashboards' || text === 'Resources' ? '5px' : '60px',
//           }}
//         />
//       </ListItemButton>
//     </ListItem>
//   ))}
// </List>

// <List>
//   {['Resources', 'Addresses', 'Comments', 'Posts', 'Purchases', 'Roles', 'Tags', 'Users'].map((text, index) => (
//     <ListItem key={text} disablePadding>
//       <ListItemButton>
//         {text === 'Resources' ? (
//           <ListItemIcon>
//             <SourceRoundedIcon />
//           </ListItemIcon>
//         ) : null}
//         <ListItemText
//           primary={text}
//           sx={{
//             color: '#808080',
//             marginLeft: text === 'Resources' ? '5px' : '60px',
//           }}
//         />
//       </ListItemButton>
//     </ListItem>
//   ))}
// </List>
//       </div>
//     </Box>

<div style={{ display: 'flex', padding: '20px', width: '260px', minWidth: '260px'}}>
A
</div>

  );
}