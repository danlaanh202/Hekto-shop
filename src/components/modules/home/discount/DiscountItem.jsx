import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Tick from "../../../../icons/Tick";
import PrimaryButton from "../../../button/PrimaryButton";
import Title from "../../../title/Title";

const navItem = [
  {
    id: 1,
    title: "Wood Chair",
  },
  {
    id: 2,
    title: "Plastic Chair",
  },
  {
    id: 3,
    title: "Sofa Chair",
  },
];
const DiscountItemStyles = styled.div`
  .container {
    .nav-discount {
      display: flex;
      justify-content: center;
      gap: 25px;
      &-item {
        font-family: "Lato";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        cursor: pointer;
        color: ${(props) => props.theme.purpleHeading};
      }
    }
    .active {
      border-bottom: 1px solid ${(props) => props.theme.pinkSecondary};
      color: ${(props) => props.theme.pinkSecondary};
    }
    .nav-feature {
      display: flex;
      align-items: center;
      &-about {
        display: flex;
        flex-direction: column;
        gap: 20px;
        min-width: 510px;
        .title {
          font-size: 35px;
          line-height: 132%;
          /* or 46px */

          letter-spacing: 0.015em;
          color: ${(props) => props.theme.purpleHeading};
        }
        .name {
          font-size: 21px;
          line-height: 132%;
          /* identical to box height, or 28px */
          color: ${(props) => props.theme.pinkSecondary};
          letter-spacing: 0.015em;
        }
        .desc {
          font-family: "Lato";
          font-style: normal;
          font-weight: 400;
          font-size: 17px;
          line-height: 30px;
          /* or 176% */
          color: ${(props) => props.theme.grayDesc};
          letter-spacing: 0.02em;
        }
        &-outstanding {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          &-item {
            font-family: "Lato";
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 30px;
            /* identical to box height, or 188% */
            color: #b8b8dc;
            letter-spacing: 0.02em;
          }
        }
      }
    }
  }
`;

const DiscountItem = () => {
  const [navActive, setNavActive] = useState(0);
  return (
    <DiscountItemStyles>
      <div className="container">
        <Title>Discount Item</Title>
        <div className="nav-discount">
          {navItem.map((item, index) => (
            <span
              className={`nav-discount-item ${
                navActive === item.id - 1 ? "active" : ""
              }`}
              onClick={() => setNavActive(index)}
            >
              {item.title}
            </span>
          ))}
        </div>
        <div className="nav-feature">
          <div className="nav-feature-about">
            <h3 className="title">20% Discount Of All Products</h3>
            <span className="name">Eams Sofa Compact</span>
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
              feugiat habitasse nec, bibendum condimentum.
            </p>
            <div className="nav-feature-about-outstanding">
              <span className="nav-feature-about-outstanding-item">
                <Tick></Tick>
                Material expose like metal
              </span>
              <span className="nav-feature-about-outstanding-item">
                <Tick></Tick>
                Clear lines and geomatric figures
              </span>
              <span className="nav-feature-about-outstanding-item">
                <Tick></Tick>
                Simple neutral colours.
              </span>
            </div>
            <PrimaryButton>Shop Now</PrimaryButton>
          </div>

          <div className="nav-feature-image">
            <img srcSet="/image/chair-discount.png" alt="" />
          </div>
        </div>
      </div>
    </DiscountItemStyles>
  );
};

export default DiscountItem;
