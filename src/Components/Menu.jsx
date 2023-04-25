import { useState } from 'react';
import styled from "styled-components";
import { Navbar, Nav } from "react-bootstrap";
import Logo from '../imeg/logo192.png';

const NavStyle = styled(Nav)`
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ImageBrend = styled.img`
  width: 2.2em;
  height: 2.2em;
  margin-left: 1em;
  animation: rotation infinite linear 5s;
  
  @keyframes rotation {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(360deg);
    }
  }
`;

const NavLinkStyled = styled(Nav.Link)`
  font-weight: 400;
  letter-spacing: 2px;
  font-size: calc(12px + 8 * (100vw / 1920));
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
  background-color: rgba(235, 235, 235, 0.973);
  z-index: 111;
  height: 220px;
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
        <Navbar.Brand >
          <ImageBrend src={Logo} alt='logo' />
        </Navbar.Brand>
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
