import React from "react";
import styled from "styled-components";
const TopItemStyles = styled.div`
  :hover {
    .top-image {
      box-shadow: 0px 8px 40px rgba(97, 68, 243, 0.3);
      cursor: pointer;
      /* background: #9877e7; */
    }
  }
  .top-image {
    min-width: 250px;
    height: 250px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme.grayBackGroundLighter};
  }
  .top-about {
    color: ${(props) => props.theme.purpleHeading};
    display: flex;
    align-items: center;
    gap: 13px;
    flex-direction: column;
    margin-top: 24px;
    &-name {
      font-size: 20px;
      line-height: 23px;
      text-align: center;
      cursor: pointer;
    }
    &-price {
      font-size: 16px;
      line-height: 19px;
    }
  }
`;
const TopItem = () => {
  return (
    <TopItemStyles>
      <div className="top-image">
        <img srcSet="/image/chair-categories.png" alt="" />
      </div>
      <div className="top-about">
        <h4 className="top-about-name">Mini LCW Chair</h4>
        <span className="top-about-price">$56.00</span>
      </div>
    </TopItemStyles>
  );
};

export default TopItem;
