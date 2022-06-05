import React from "react";
import styled from "styled-components";
import BannerTitle from "../components/banner-title/BannerTitle";
import PrimaryButton from "../components/button/PrimaryButton";
const NotFound = styled.div`
  .not-found-container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .img-404 {
      /* width: 30vw; */
    }
  }
`;
const NotFoundPages = () => {
  return (
    <NotFound>
      <BannerTitle title="404 NotFound"></BannerTitle>
      <div className="container not-found-container">
        <div className="img-404">
          <img srcSet="/image/not-found-img.png" alt="" />
        </div>
        <PrimaryButton>Back To Home</PrimaryButton>
      </div>
    </NotFound>
  );
};

export default NotFoundPages;
