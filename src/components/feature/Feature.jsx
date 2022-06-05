import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Title from "../title/Title";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";

import FeatureProduct from "./FeatureProduct";
const FeatureStyles = styled.div`
  width: 100%;

  .container {
    overflow: hidden;

    .feature {
      width: 100%;
      display: flex;
      justify-content: space-between;
      gap: 40px;
    }
    .carousel {
      margin: 52px;
      display: flex;
      gap: 6px;
      justify-content: center;
      .active {
        transform: scaleX(1.5);
        background: ${(props) => props.theme.carouselBackgroundActive};
        margin: 0 6px;
      }
      &-number {
        cursor: number;
        display: block;
        height: 4px;
        width: 16px;
        background: ${(props) => props.theme.carouselBackground};
        cursor: pointer;
      }
    }
  }
`;

const Feature = () => {
  const [carouselNumber, setCarouselNumber] = useState(0);

  return (
    <FeatureStyles>
      <div className="container">
        <Title center={true}>Featured Products</Title>

        <Swiper className="feature" grabCursor={true} slidesPerView="4">
          <SwiperSlide>
            <FeatureProduct></FeatureProduct>
          </SwiperSlide>
          <SwiperSlide>
            <FeatureProduct></FeatureProduct>
          </SwiperSlide>
          <SwiperSlide>
            <FeatureProduct></FeatureProduct>
          </SwiperSlide>
          <SwiperSlide>
            <FeatureProduct></FeatureProduct>
          </SwiperSlide>
          <SwiperSlide>
            <FeatureProduct></FeatureProduct>
          </SwiperSlide>
          <SwiperSlide>
            <FeatureProduct></FeatureProduct>
          </SwiperSlide>
          <SwiperSlide>
            <FeatureProduct></FeatureProduct>
          </SwiperSlide>
        </Swiper>
        <ul className="carousel">
          {Array(4)
            .fill("")
            .map((item, index) => (
              <li
                key={item + index}
                onClick={() => setCarouselNumber(index)}
                className={`carousel-number ${
                  carouselNumber === index ? "active" : ""
                }`}
              ></li>
            ))}
        </ul>
      </div>
    </FeatureStyles>
  );
};

export default Feature;
