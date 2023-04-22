import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

import { processOfWorkArr } from "./imgList";
import styled from "styled-components";

const CaruselStyle = styled.div`
  width: 100%;
  margin-top: 2em;
  padding: 0 2em;
`;

const H2Style = styled.h2`
  text-align: center;
  font-family: "Pacifico", cursive;
`;

const SwiperStyle = styled(Swiper)`
  width: 100%;
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
  padding: 1em 0;
  width: 100%;
  height: auto;
`;

export default function ComponentCarusel() {
  return (
    <CaruselStyle>
      <H2Style>Немного из процесса работы</H2Style>
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
          >
            <ImageStyle src={x.image} alt="" />
          </SwiperSlideStyle>
        ))}
      </SwiperStyle>
    </CaruselStyle>
  );
}
