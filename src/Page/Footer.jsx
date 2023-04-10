/* eslint-disable jsx-a11y/alt-text */
import styled from "styled-components";
import Forma from "../Components/Forms";
import MyColages from "../imeg/MyCollages.jpg";
import Vk from '../imeg/vk.png';
import Telegram from  '../imeg/telegram.png'

const DivStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  margin: 1em auto;
  @media (max-width: 768px) {

  }
`;

const ImgStyle = styled.img`
  @media (max-width: 990px) {
    width: 30%;
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
  font-family: 'Pacifico', cursive;

  &:hover{
   
  }
`;

function Footer() {
    return (
        <>
            <DivStyle>
                <ImgStyle src={MyColages}/>
                <Forma/>
            </DivStyle>
            <BottomStyled>
                <p>TrailBear</p>
                <p style={{ transform: 'scale(1.2)'}}>
                    <a href="https://vk.com/misha0382" rel="noreferrer">
                        <img src={Vk}/>
                    </a>
                </p>
                <p>
                    <a href="#"  rel="noreferrer">
                        <img src={Telegram}/>
                    </a>
                </p>
            </BottomStyled>
        </>

    )
        ;
}

export default Footer;
