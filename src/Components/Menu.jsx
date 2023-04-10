import React from 'react';
// import { useState } from 'react';


import styled from 'styled-components';

import { Navbar, Nav } from "react-bootstrap"

const NavStyle = styled(Nav)`
   justify-content: center;
   align-items: center;
 
   width: 100%;
`;

const NavLinkStyled = styled(Nav.Link)`
    font-weight: 400;
    letter-spacing: 2px;
    font-size: calc(12px + 8 * (100vw / 1920));
    text-shadow: 10px 10px 30px #d6d7dc, -10px -10px 30px #dedae0;
    color: rgb(0, 0, 0);
    font-family: 'Pacifico', cursive;
    font-size: 1.5em;
    &:hover{
    transform: scale(1.1);
}
`;

const Menu = () => {

    return (
        <nav>
            <Navbar expand="lg" fixed="top">
                {/* <Navbar.Brand href="#home"></Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <NavStyle >
                        <NavLinkStyled href="#my_work">Мои работы</NavLinkStyled>
                        <NavLinkStyled href="#reviews">Отзывы</NavLinkStyled>
                        <NavLinkStyled href="#feedback">Контакты</NavLinkStyled>
                    </NavStyle>
                </Navbar.Collapse>
            </Navbar>
        </nav>
    );
}

export default Menu;

