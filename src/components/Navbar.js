import React from 'react';
import styled from 'styled-components';
// import { AiOutlineSearch } from 'react-icons/ai';
import logo from '../assets/Logo';

const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 20px;
background-color: #fff;
`;

const Logo = styled.div`
font-size: 25px;
font-weight: 400;
margin-left: 60px;
`;

const SearchContainer = styled.div`
position: relative;
display: flex;
align-items: center;
margin: 0 auto;
`;

const SearchInput = styled.input`
padding: 5px 40px 5px 10px;
border: none;
border-radius: 50px;
margin-right: 10px;
width: 1000px;
height: 30px;
background-color: #dadada;
`;



const LogoImage = styled.img`
width: 30px;
height: 30px;
margin-right: 30px;
`;


const Navbar = () => {
    return (
        <NavbarContainer>
           <Logo>
            <LogoImage src={logo} alt="Logo" />
           PROCETRA CRM
           </Logo>
           <SearchContainer>
        <SearchInput type="text" placeholder="Press / to search" />
      
      </SearchContainer>
        </NavbarContainer>
    );
};

export default Navbar;
