import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import FeatureProduct from "./FeatureProduct";
import Title from "../../../title/Title";
const FeatureStyles = styled.div`
  width: 100%;
  padding-bottom: 40px;
  .container {
    overflow: hidden;
    .swiper {
      height: 440px;
      .swiper-pagination {
        bottom: 0;
        &-bullet {
          height: 4px;
          width: 16px;
          border-radius: 2px;
        }
        &-bullet-active {
          transform: scaleX(1.5);
          background: ${(props) => props.theme.carouselBackgroundActive};
          margin: 0 6px;
        }
      }
    }
    /* .feature {
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
    } */
  }
`;

const Feature = () => {
  const [carouselNumber, setCarouselNumber] = useState(0);

  return (
    <FeatureStyles>
      <div className="container">
        <Title center={true}>Featured Products</Title>

        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="feature mySwiper"
          grabCursor={true}
          slidesPerView={4}
        >
          <SwiperSlide>
            <FeatureProduct />
          </SwiperSlide>
          <SwiperSlide>
            <FeatureProduct />
          </SwiperSlide>
          <SwiperSlide>
            <FeatureProduct />
          </SwiperSlide>
          <SwiperSlide>
            <FeatureProduct />
          </SwiperSlide>
          <SwiperSlide>
            <FeatureProduct />
          </SwiperSlide>
          <SwiperSlide>
            <FeatureProduct />
          </SwiperSlide>
          <SwiperSlide>
            <FeatureProduct />
          </SwiperSlide>
        </Swiper>
        {/* <ul className="carousel">
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
        </ul> */}
      </div>
    </FeatureStyles>
  );
};

export default Feature;
