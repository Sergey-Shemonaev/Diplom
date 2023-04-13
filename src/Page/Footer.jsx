/* eslint-disable jsx-a11y/alt-text */
import styled from "styled-components";
import Forma from "../Components/Forms";
import MyColages from "../imeg/MyCollages.jpg";
import Vk from "../imeg/vk.png";
import Telegram from "../imeg/telegram.png";
import { animateScroll as scroll } from "react-scroll";


const DivStule = styled.div`
  margin: 0 auto;
  padding: 0 2em;
  width: calc(98% - 8em);
`;

const Feedback = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  margin: 0 auto;
  @media (max-width: 768px) {
  }
`;

const ImgStyle = styled.img`
  width: 50%;
  @media (max-width: 990px) {
    width: 50%;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const BottomStyled = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  font-size: 1.5em;
  font-family: "Pacifico", cursive;
  margin-top: 1em;
  &:hover {
  }
`;

const ButtonTrailBear = styled.button`
  border: none;
  background: none;
`;

function Footer() {
  return (
    <DivStule id="feedback">
      <Feedback>
        <ImgStyle src={MyColages} alt="" />
        <Forma />
      </Feedback>
      <BottomStyled>
      
        <ButtonTrailBear onClick={() => scroll.scrollToTop()} >TrailBear</ButtonTrailBear>
        <p >
          <a href="https://vk.com/misha0382" target="_blank" rel="noopener noreferrer">
            <img src={Vk} alt="Vk" />
          </a>
        </p>
        <p>
          <a href="https://vk.com/misha0382" target="_blank" rel="noopener noreferrer">
            <img src={Telegram} alt="Telegram" />
          </a>
        </p>
      </BottomStyled>
    </DivStule>
  );
}

export default Footer;
