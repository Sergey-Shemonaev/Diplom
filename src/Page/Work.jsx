/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import styled from "styled-components";

import { myWorks } from "../Components/imgList";
import Modals from "../Components/ModalComponent";

const H1Style = styled.h1`
  text-align: center;
  font-family: "Pacifico", cursive;
  margin: 1em auto;
`;

const SectionWrk = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
  max-width: 1400px;
  margin: 2em auto;
  padding: 0 2em;
  font-family: "Pacifico", cursive;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 796px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  } ;
`;

const ButtonStyle = styled.button`
  border: 1px solid black;
  margin: 1em 15px;
  background: #e4e3de;
  border: none;
  padding: 7px;
  cursor: pointer;
  font-family: "Pacifico", cursive;
  font-size: 16px;
`;

const CardStyle = styled.div`
  transition: linear 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #b4b4b4;

  &:hover {
    box-shadow: 0 0 10px 2px #bebdbd;
  }
`;

const ImageStyle = styled.img`
  padding: 1em;
  width: 100%;
  height: auto;
  display: block;
`;

const Work = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <H1Style id="my_work">Мои работы</H1Style>
      <SectionWrk>
        {myWorks.map((x) => (
          <CardStyle key={x.id}>
            <ImageStyle src={x.url} alt="" />
            <p style={{ textAlign: "center" }}>{x.title}</p>
            <p style={{ textAlign: "center" }}>Цена - {x.price}</p>
            <ButtonStyle variant="primary" onClick={handleShow}>
              Заказать
            </ButtonStyle>
          </CardStyle>
        ))}
      </SectionWrk>
      <Modals show={show} hide={handleClose} />
    </>
  );
};

export default Work;
