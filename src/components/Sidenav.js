// import * as React from 'react';
// import { styled } from 'styled-components';
// import { RxDashboard } from "react-icons/rx";
// import { BiHomeAlt } from "react-icons/bi";

// const NavItem = styled.div`
//     padding: 10px;
//     display: flex;
//     align-items: center;
//     font-size: 16px;
//     color: #808080;
//     border-radius: 5px;
//     &:hover {
//         background: #f1f1f1;
//     }
//     cursor: pointer;
// `;


// const menuItems = [
//     {
//         headerName: "Dashboard",
//         icon: <RxDashboard size={25} color='#808080' />,
//         subHeaders: [
//             {
//                 headerName: 'Resources'
//             },
//             {
//                 headerName: 'Adresses'
//             },
//             {
//                 headerName: 'Comments'
//             },
//             {
//                 headerName: 'Posts'
//             },
//             {
//                 headerName: 'Purchases'
//             },
//             {
//                 headerName: 'Roles'
//             },
//             {
//                 headerName: 'Tags'
//             },
//             {
//                 headerName: 'Users'
//             }
//         ]
//     },
//     {
//         headerName: "Main",
//         icon: <BiHomeAlt size={25} color='#808080' />,
//         subHeaders: [
//             {
//                 headerName: 'Tags'
//             },
//             {
//                 headerName: 'Users'
//             }
//         ]
//     }
// ]


// export default function SidenavLeft() {
//     return (
//         <div style={{ width: '260px', minWidth: '260px', padding: "20px", }}>
//             <div style={{ display: 'flex', flexDirection: "column", background: "white", borderRadius: "5px", padding: "15px 20px" }}>
//                 {menuItems.map((item, index) => {
//                     return (
//                         <div style={{ display: "flex", flexDirection: "column" }}>
//                             <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
//                                 {item.subHeaders && item.icon}
//                                 <div style={{ fontSize: "18px", fontKerning: "1px", color: "#808080" }}>{item.headerName}</div>
//                             </div>
//                             <div style={{ paddingLeft: "35px", display: "flex", flexDirection: "column", gap: "5px", margin: "10px 0" }}>
//                                 {item.subHeaders && item.subHeaders.map((subItem, index) => {
//                                     return (
//                                         <NavItem>{subItem.headerName}</NavItem>
//                                     )
//                                 })}
//                             </div>
//                         </div>
//                     )
//                 })}
//             </div>

//         </div>

//     );
// }

import React from "react";
import styled from "styled-components";
import { Dashboard, Home } from '@mui/icons-material';

const SidebarContainer = styled.div`
width: 260px;
min-width: 260px;
padding: 20px;
`;

const MenuContainer = styled.div`
display: flex;
flex-direction: column;
background: white;
border-radius: 5px;
padding: 15px 20px;
`;

const MenuItem = styled.div`
display: flex;
flex-direction: column;
`;

const MenuItemHeader = styled.div`
display: flex;
gap: 10px;
align-items: center;
font-size: 18px;
font-kerning: 1px;
color: #808080;
`;

const SubMenu = styled.div`
padding-left: 35px;
display: flex;
flex-direction: column;
gap: 5px;
margin: 10px 0;
`;

const NavItem = styled.div`
padding: 10px;
display: flex;
align-items: center;
font-size: 16px;
color: #808080;
border-radius: 5px;
&:hover {
    background: #f1f1f1;
}
cursor: pointer;
`;

const menuItems = [
    {
        headerName: "Dashboard",
        icon: <Dashboard sx={{ fontSize: 25, color: '#808080' }} />,
        subHeaders: [
            {headerName: "Resources"},
            {headerName: "Addresses"},
            {headerName: "Comments"},
            {headerName: "Posts"},
            {headerName: "Purchases"},
            {headerName: "Roles"},
            {headerName: "Tags"},
            {headerName: "Users"},
        ],
    },
    {
        headerName: "Main",
        icon: <Home sx={{ fontSize: 25, color: '#808080' }} />,
        subHeaders: [
            {headerName: "Tags"},
            {headerName: "Users"},
        ],
    },
];

export default function SidenavLeft() {
    return (
      <SidebarContainer>
        <MenuContainer>
          {menuItems.map((item, index) => (
            <MenuItem key={index}>
              <MenuItemHeader>
                {item.subHeaders && item.icon}
                {item.headerName}
              </MenuItemHeader>
              <SubMenu>
                {item.subHeaders &&
                  item.subHeaders.map((subItem, subIndex) => (
                    <NavItem key={subIndex}>{subItem.headerName}</NavItem>
                  ))}
              </SubMenu>
            </MenuItem>
          ))}
        </MenuContainer>
      </SidebarContainer>
    );
  }