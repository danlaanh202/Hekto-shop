import React from "react";
import { isMobile } from "react-device-detect";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Title from "../../../title/Title";

import TopItem from "./TopItem";
import { mobile } from "../../../../responsive";
const TopCategoriesStyles = styled.div`
  margin-bottom: 50px;
  .container {
    .top-categories {
      .swiper {
        height: 440px;
        ${mobile({
          height: "270px",
        })}
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
    }
  }
`;
const TopCategories = () => {
  return (
    <TopCategoriesStyles>
      <div className="container">
        <Title>Top Categories</Title>
        <div className="top-categories">
          <Swiper
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="top-categories-swiper mySwiper"
            grabCursor={true}
            spaceBetween={40}
            centeredSlides={isMobile ? true : false}
            slidesPerView={isMobile ? 2 : 3}
          >
            <SwiperSlide>
              <TopItem></TopItem>
            </SwiperSlide>
            <SwiperSlide>
              <TopItem></TopItem>
            </SwiperSlide>
            <SwiperSlide>
              <TopItem></TopItem>
            </SwiperSlide>
            <SwiperSlide>
              <TopItem></TopItem>
            </SwiperSlide>
            <SwiperSlide>
              <TopItem></TopItem>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </TopCategoriesStyles>
  );
};

export default TopCategories;
