import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

import { processOfWorkArr } from "./imgList";
import styled from "styled-components";

const CaruselStyle = styled.div`
  margin: 1em auto;
  width: 100%;
`;

const H1Style = styled.h1`
  text-align: center;
  font-family: "Pacifico", cursive;
  /* letter-spacing: 0.12em; */
`;

const SwiperStyle = styled(Swiper)`
  width: 95%;
  margin-top: 2em;
`;

const SwiperSlideStyle = styled(SwiperSlide)`
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageStyle = styled.img`
  margin: 10px 0;
  width: 84%;
  height: auto;

  @media (max-width: 1024px) {
    width: 80%;

  }
`;

export default function ComponentCarusel() {
  return (
    <CaruselStyle>
      <H1Style>Немного из процесса работы</H1Style>
      <SwiperStyle
        spaceBetween={50}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {processOfWorkArr.map((x) => (
          <SwiperSlideStyle
            key={x.id}
            style={{ textAlign: "center", marginTop: "2em" }}
          >
            <ImageStyle src={x.image} alt="" />
          </SwiperSlideStyle>
        ))}
      </SwiperStyle>
    </CaruselStyle>
  );
}
