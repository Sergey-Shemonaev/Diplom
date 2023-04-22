import styled from "styled-components";

import Logos1 from "../imeg/Logos1.jpg";
import Logos2 from "../imeg/Logos2.jpg";

const TextOfLogoStyle = styled.div`
  display: flex;
  gap: 30px;
  padding:0  2em ;
  @media (max-width: 990px) {
    flex-direction: column;
  };

  @media (max-width: 768px) {
    padding:  2em;
  }
`;

const TextStyle = styled.div`
  /* width: 70%; */
  font-family: "Pacifico", cursive;
  font-size: 1.3em;
  color: rgb(13, 16, 21);
  text-align: justify;
  @media (max-width: 1300px) {
    font-size: 1.1em;
  }

  @media (max-width: 1024px) {
    font-size: 1em;
  }

  @media (max-width: 768pc) {
    /* width: 100%; */
  }
`;

const H4Style = styled.h4`
  text-align: center;
`;

const BoxStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;

  @media (max-width: 990px) {
    width: 100%;
  }
`;

const BordersStyle = styled.div`
  padding: 25px;
  position: relative;

  &:after {
    content: "";
    border: 2px solid rgb(166, 166, 166);
    box-shadow: 0 0 10px 10px rgba(166, 166, 166, 0.62);
    border-radius: 50px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: rotateZ(45deg);
  }
  @media (max-width: 768pc) {
    margin: 2.6em;
  }
`;

const ImgContainerStyle = styled.div`
  position: relative;
  animation: rotation infinite linear 4.5s;
  transform: rotateY(0deg);
  transform-style: preserve-3d;
  @keyframes rotation {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(360deg);
    }
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

const WrapperStyle = styled.div`
  display: flex;
`;

const ImgFrontStyle = styled.img`
  border-radius: 50%;
  backface-visibility: hidden;
  width: 18em;
  height: auto;
  @media (max-width: 1300px) {
    width: 15em;
  }

  @media (max-width: 1024px) {
    width: 11em;
  }
`;

const ImgBackStyle = styled.img`
  border-radius: 50%;
  backface-visibility: hidden;
  width: 18em;
  height: auto;
  position: absolute;
  left: 0;
  transform: rotateY(180deg);
  @media (max-width: 1300px) {
    width: 15em;
  }
  @media (max-width: 1024px) {
    width: 11em;
  }
`;

function TextOfLogo() {
  return (
    <TextOfLogoStyle>
      <TextStyle>
        <H4Style>Приветствую всех на своём сайте!</H4Style>
        Приветствую всех на своём сайте! Меня зовут Михаил и я мастер кожаных
        изделий ручной работы в винтажном стиле. Мне очень полюбилось это
        ремесло и каждое своё изделие я пропускаю через себя, вкладывая в него
        частичку своей души, которой в последствии я делюсь с вами. Каждое
        изделие изготавливается полностью вручную. Детали изделия натираются
        специальным составом для защиты от влаги, а так же патинируются воском
        для придания изделию необычного перехода цвета, что делает его
        нестандартным и создаёт эффект "поношенности". Края деталей так же
        обрабатываются, подкрашиваются и натираются до блеска. Каждая деталь
        пробивается так же вручную, а после сшивается шорно-седельным швом,
        который является самым крепким и надёжным, что не может сравниться с
        машинным. Для пошива изделий используется только натуральная кожа КРС и
        вощеные нити. У меня нет большой команды, поэтому занимаюсь каждым
        изделием лично. Изделия, которые вы приобретёте, будут служить вам или
        вашим близким долгие годы.
      </TextStyle>
      <BoxStyle>
        <WrapperStyle>
          <BordersStyle>
            <ImgContainerStyle>
              <ImgFrontStyle src={Logos1} alt="logotip1" />
              <ImgBackStyle src={Logos2} alt="logotip2" />
            </ImgContainerStyle>
          </BordersStyle>
        </WrapperStyle>
      </BoxStyle>
    </TextOfLogoStyle>
  );
}

export default TextOfLogo;
