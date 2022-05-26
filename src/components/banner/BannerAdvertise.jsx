import React from "react";
import styled from "styled-components";
import PrimaryButton from "../button/PrimaryButton";
const BannerAdvertiseStyles = styled.div`
  background: #f2f0ff;
  min-height: 580px;
  margin-top: 100px;
  .banner {
    max-width: 1050px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &-image {
    }
    &-about {
      display: flex;
      flex-direction: column;
      gap: 32px;
      &-title {
        font-size: 35px;
        line-height: 132%;
        color: ${(props) => props.theme.purpleHeading};
      }
      &-description {
        /* list-style: none; */
        /* padding-left: 10px; */
        &-item {
          color: ${(props) => props.theme.grayDesc};
          font-family: "Lato";
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 175%;
          ::marker {
            color: ${(props) => props.theme.bulletBlue};
            font-size: 1.3em;
          }
        }
      }
      &-bottom {
        display: flex;
        gap: 20px;
        align-items: center;
        &-about {
          color: ${(props) => props.theme.purpleHeading};
          display: flex;
          /* align-items: center; */
          flex-direction: column;
          gap: 5px;
          &-name {
            font-size: 14px;
            line-height: 16px;
            letter-spacing: 0.02em;
            font-weight: 500;
          }
          &-price {
            font-family: "Lato";
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
          }
        }
      }
    }
  }
`;
const List = styled.ul``;

const BannerAdvertise = () => {
  return (
    <BannerAdvertiseStyles>
      <div className="container banner">
        <div className="banner-image">
          <img srcSet="/image/banner-advertise.png" alt="" />
        </div>
        <div className="banner-about">
          <h2 className="banner-about-title">
            Unique Features Of leatest {"&"} Trending Poducts
          </h2>
          <List className="banner-about-description">
            <li id="li-1" className="banner-about-description-item">
              All frames constructed with hardwood solids and laminates
            </li>
            <li id="li-2" className="banner-about-description-item">
              Reinforced with double wood dowels, glue, screw - nails corner
              blocks and machine nails
            </li>
            <li id="li-3" className="banner-about-description-item">
              Arms, backs and seats are structurally reinforced
            </li>
          </List>
          <div className="banner-about-bottom">
            <PrimaryButton>Add To Cart</PrimaryButton>
            <div className="banner-about-bottom-about">
              <span className="banner-about-bottom-about-name">
                B{"&"}B Italian Sofa
              </span>
              <span className="banner-about-bottom-about-price">$32.00</span>
            </div>
          </div>
        </div>
      </div>
    </BannerAdvertiseStyles>
  );
};

export default BannerAdvertise;
