import styled from "styled-components";
import Forma from "../Components/Forms";
import MyColages from "../imeg/MyCollages.jpg";
import Vk from "../imeg/vk.png";
import whatsapp from "../imeg/whatsapp.png";
import ScrollButton from "../Components/ScrollTopComponent";


const DivStule = styled.div`
  margin: 0 auto;
  padding: 0 2em;
  width: 100%;
`;

const Feedback = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  margin: 0 auto;
  padding: 0 2em;
  @media (max-width: 768px) {
  }
`;

const ImgStyle = styled.img`
  width: 100%;
  height: auto;

  @media (max-width: 1023px) {
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
        <ButtonTrailBear  >TrailBear</ButtonTrailBear>
        <p >
          <a href="https://vk.com/misha0382" target="_blank" rel="noopener noreferrer">
            <img src={Vk} alt="Vk" />
          </a>
        </p>
        <p>
          <a href="https://wa.me/79969574045?text=Здравствуйте%2C+можно+узнать+о+товаре" target="_blank" rel="noopener noreferrer">
            <img src={whatsapp} alt="whatsapp" />
          </a>
        </p>
      </BottomStyled>
      <ScrollButton />

    </DivStule>
  );
}

export default Footer;
