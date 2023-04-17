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
const BgcMobiStyle = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(235, 235, 235, 0.884);
  z-index: 111;
  height: 210px;
  transition: linear 2s;
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
  const [isShown, setIsShown] = useState(false);

  const handleClick = () => {
    setIsShown(current => !current);
  };


  return (
    < >
      {isShown && (
        <BgcMobiStyle />
      )}
      <Navbar expand="lg" fixed="top"
        className={colorChange ? "header colorChange" : "header"}
        collapseOnSelect={true}
      >
        <Navbar.Brand ></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleClick} />
        <Navbar.Collapse id="basic-navbar-nav"  >
          <NavStyle>
            <NavLinkStyled onClick={() => setIsShown(false)} href="#my_work">Мои работы</NavLinkStyled>
            <NavLinkStyled onClick={() => setIsShown(false)} href="#reviews">Отзывы</NavLinkStyled>
            <NavLinkStyled onClick={() => setIsShown(false)} href="#feedback">Контакты</NavLinkStyled>
          </NavStyle>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Menu;
