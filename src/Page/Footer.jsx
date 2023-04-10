/* eslint-disable jsx-a11y/alt-text */
import styled from "styled-components";
import Forma from "../Components/Forms";
import MyColages from "../imeg/MyCollages.jpg";
import Vk from "../imeg/vk.png";
import Telegram from "../imeg/telegram.png";

const DivStule = styled.div`
  margin-top: 3em;
  padding: 0 2em;
`;

const Feedback = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  margin: 1em auto;
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
  gap: 1em;
  font-size: 1.5em;
  font-family: "Pacifico", cursive;

  &:hover {
  }
`;

function Footer() {
  return (
    <DivStule id="feedback">
      <Feedback>
        <ImgStyle src={MyColages} alt="" />
        <Forma />
      </Feedback>
      <BottomStyled>
        <p>TrailBear</p>
        <p >
          <a href="https://vk.com/misha0382" target="_blank" rel="noopener noreferrer">
            <img src={Vk} alt="Vk" />
          </a>
        </p>
        <p>
          <span >
            <img src={Telegram} alt="Telegram" />
          </span>
        </p>
      </BottomStyled>
    </DivStule>
  );
}

export default Footer;
