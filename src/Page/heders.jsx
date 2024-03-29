import Menu from "../Components/Menu";
import styled from "styled-components";

import topime from "../imeg/topime.jpeg";

import tornPart from "../imeg/tornPart.png";

const HedersStyle = styled.header`
  position: relative;
  max-width: 100%;
  min-height: 100vh;
  top: -2.6em;
  background-color: #9c5959;
  background-image: url(${topime});
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed !important;

  &:after {
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 100px;
    display: block;
    visibility: visible;
    content: "";
    background: url(${tornPart});
    background-size: cover;
  }

  @keyframes scales {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const PHeaderStyle = styled.div`
  position: relative;
  top: 2.5em;
  width: 100%;
  text-align: center;
  font-family: "Pacifico", cursive;
  font-size: calc(58px + 24 * (100vw / 1920));
  /* text-shadow: 10px 10px 30px #d6d7dc, -10px -10px 30px #dedae0; */
  animation: scales 2s linear;
  margin: 0.5em 0;
  letter-spacing: 3px;
  color: #000000;

  @media (max-width: 990px) {
    top: 4.5em;

    font-size: calc(42px + 18 * (100vw / 1920));
  };

  @media (max-width: 720px) {
    top: 6.5em;
    font-size: calc(34px + 18 * (100vw / 1920));
  };
`;

function Heders() {
  return (
    <HedersStyle>
      <Menu />
      <PHeaderStyle>TrailBear <br/>Изделия <br/> ручной работы <br/> из кожи</PHeaderStyle>
    </HedersStyle>
  );
}

export default Heders;
