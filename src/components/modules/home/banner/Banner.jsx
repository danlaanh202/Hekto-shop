import React from "react";
import styled from "styled-components";
import BannerItem from "./BannerItem";
const BannerStyles = styled.div`
  width: 100%;
  background: #f2f0ff;
  height: 764px;
  position: relative;
  display: flex;
  align-items: center;
  .container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    height: 100%;
  }
  .lamb-deco {
    position: absolute;
    left: -350px;
    top: 0px;
  }
  .switch {
    display: flex;
    gap: 15px;
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
  }
  .banner-img {
  }
  .banner-container {
    min-width: 650px;
    z-index: 10;
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: flex-start;
    h3 {
      font-family: "Lato";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 28px;
      color: ${(props) => props.theme.pinkSecondary};
    }
    h1 {
      font-family: "Josefin Sans";
      font-weight: 700;
      font-size: 53px;
      line-height: 82px;
      letter-spacing: 0.015em;
      color: #000000;
    }
    p {
      color: ${(props) => props.theme.graySubText};
      margin: 20px 0;
    }
  }
`;
const SwitchItem = styled.div`
  width: 10px;
  height: 10px;
  border: 1px solid ${(props) => props.theme.pinkSecondary};
  transform: rotate(-45deg);
  background: ${(props) => (props.active ? props.theme.pinkSecondary : "")};
  cursor: pointer;
`;

const Banner = () => {
  return (
    <BannerStyles>
      <BannerItem></BannerItem>
      <div className="switch">
        <SwitchItem active={true} id={1}></SwitchItem>
        <SwitchItem id={2}></SwitchItem>
        <SwitchItem id={3}></SwitchItem>
      </div>
    </BannerStyles>
  );
};

export default Banner;
