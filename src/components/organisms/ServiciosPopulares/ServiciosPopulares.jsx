import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tempImg from "assets/promo-imgs/promo-imgs-banner_1.jpg";
import ServiceCard from "./ServiceCard";

const WrapperServicios = styled.div`
  background-color: #f3f4f6;
  padding: 60px 120px;
  display: block;
  text-align: center;
`;

const Titulo = styled.h2`
  color: #096227;
  font-weight: 700;
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

const SlickSlider = styled(Slider)`
  margin: 40px 120px;
`;

const ServiciosPopulares = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,

    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4
        }
      }
    ]
  };

  return (
    <WrapperServicios>
      <Titulo>Servicios más populares</Titulo>

      <SlickSlider {...sliderSettings}>
        <ServiceCard backgroundImg={tempImg} title="Matemáticas" />
        <ServiceCard backgroundImg={tempImg} title="Matemáticas" />
        <ServiceCard backgroundImg={tempImg} title="Matemáticas" />
        <ServiceCard backgroundImg={tempImg} title="Matemáticas" />
        <ServiceCard backgroundImg={tempImg} title="Matemáticas" />
        <ServiceCard backgroundImg={tempImg} title="Matemáticas" />
        <ServiceCard backgroundImg={tempImg} title="Matemáticas" />
        <ServiceCard backgroundImg={tempImg} title="Matemáticas" />
        <ServiceCard backgroundImg={tempImg} title="Matemáticas" />
        <ServiceCard backgroundImg={tempImg} title="Matemáticas" />
        <ServiceCard backgroundImg={tempImg} title="Matemáticas" />
        <ServiceCard backgroundImg={tempImg} title="Matemáticas" />
        <ServiceCard backgroundImg={tempImg} title="Matemáticas" />
        <ServiceCard backgroundImg={tempImg} title="Matemáticas" />
        <ServiceCard backgroundImg={tempImg} title="Matemáticas" />
        <ServiceCard backgroundImg={tempImg} title="Matemáticas" />
        <ServiceCard backgroundImg={tempImg} title="Matemáticas" />
      </SlickSlider>
    </WrapperServicios>
  );
};

export default ServiciosPopulares;
