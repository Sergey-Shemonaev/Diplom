// import React from 'react';
// import { animateScroll as scroll } from "react-scroll";

import { useState } from 'react';
import styled from "styled-components";
import { Navbar, Nav } from "react-bootstrap";

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
  font-family: "Pacifico", cursive;
  font-size: 1.5em;
  &:hover {
    transform: scale(1.1);
  }
`;
const NavbarCollapseStyled = styled(Navbar.Collapse)`
  background-color: transparent;
  transition: height 0.35s easNavbarCollapseStylede, background-color 0.35s ease;

  &.show {
    background-color: rgba(235, 235, 235, 0.884);
    padding: 1em 0;
  }
`;

const Menu = () => {
  const [colorChange, setColorchange] = useState(false);

  function changeHeaderColor() {
    if (window.scrollY >= 100) {
      setColorchange(true);
    }
    else {
      setColorchange(false);
    }
  }

  window.addEventListener('scroll', changeHeaderColor);
  return (
    <nav >
      <Navbar expand="lg" fixed="top" 
      className={colorChange ? "header colorChange" : "header"}
      collapseOnSelect={true}
      // onClick={() => scroll.scrollToTop()}
      >
        <Navbar.Brand ></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <NavbarCollapseStyled id="basic-navbar-nav" bg='#4f3a3a'>
          <NavStyle>
            <NavLinkStyled href="#my_work">Мои работы</NavLinkStyled>
            <NavLinkStyled href="#reviews">Отзывы</NavLinkStyled>
            <NavLinkStyled href="#feedback">Контакты</NavLinkStyled>
          </NavStyle>
        </NavbarCollapseStyled>
      </Navbar>
    </nav>
  );
};

export default Menu;
