import React from "react";
import styled from "styled-components";
import { mobile } from "../../../../responsive";
import PrimaryButton from "../../../button/PrimaryButton";

const BannerBottomStyles = styled.div`
  position: relative;
  width: 100%;
  max-width: 1920px;
  height: 460px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({
    display: "none",
  })}
  .background-banner {
    position: absolute;
    /* inset: 0; */
    inset: 0;
    z-index: 1;
  }
  .get-latest {
    gap: 30px;
    max-width: 576px;
    z-index: 20;
    display: flex;
    align-items: center;
    flex-direction: column;
    &-title {
      font-size: 35px;
      line-height: 155%;
      /* or 54px */

      text-align: center;
      letter-spacing: 0.015em;
      color: ${(props) => props.theme.purpleHeading};
    }
  }
`;
const BannerBottom = () => {
  return (
    <BannerBottomStyles>
      <div className="get-latest">
        <h3 className="get-latest-title">
          Get Latest Update By Subscribe 0ur Newslater
        </h3>
        <PrimaryButton>Shop Now</PrimaryButton>
      </div>
      <img
        srcSet="/image/banner-bottom.png"
        className="background-banner"
        alt=""
      />
    </BannerBottomStyles>
  );
};

export default BannerBottom;
