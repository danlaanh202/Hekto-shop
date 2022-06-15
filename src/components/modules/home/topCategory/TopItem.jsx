import React from "react";
import styled from "styled-components";
import { mobile } from "../../../../responsive";
const TopItemStyles = styled.div`
  :hover {
    .top-image {
      box-shadow: 0px 8px 40px rgba(97, 68, 243, 0.3);
      cursor: pointer;
      /* background: #9877e7; */
    }
  }
  .top-image {
    width: 250px;
    height: 250px;
    border-radius: 20px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme.grayBackGroundLighter};
    ${mobile({
      width: "140px",
      height: "140px",
    })}
    img {
      ${mobile({
        height: "70%",
        width: "70%",
        marginLeft: "auto",
        marginRight: "auto",
      })}
    }
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
      line-height: 1.2;
      text-align: center;
      cursor: pointer;
      ${mobile({
        fontSize: "16px",
      })}
    }
    &-price {
      font-size: 16px;
      line-height: 1.2;
      ${mobile({
        fontSize: "10px",
      })}
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
