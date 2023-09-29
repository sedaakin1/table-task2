import * as React from 'react';
import { styled } from 'styled-components';
import { RxDashboard } from "react-icons/rx";
import { BiHomeAlt } from "react-icons/bi";

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
        icon: <RxDashboard size={25} color='#808080' />,
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
        icon: <BiHomeAlt size={25} color='#808080' />,
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
        <div style={{ width: '260px', minWidth: '260px', padding: "20px", }}>
            <div style={{ display: 'flex', flexDirection: "column", background: "white", borderRadius: "5px", padding: "15px 20px" }}>
                {menuItems.map((item, index) => {
                    return (
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                                {item.subHeaders && item.icon}
                                <div style={{ fontSize: "18px", fontKerning: "1px", color: "#808080" }}>{item.headerName}</div>
                            </div>
                            <div style={{ paddingLeft: "35px", display: "flex", flexDirection: "column", gap: "5px", margin: "10px 0" }}>
                                {item.subHeaders && item.subHeaders.map((subItem, index) => {
                                    return (
                                        <NavItem>{subItem.headerName}</NavItem>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>

    );
}