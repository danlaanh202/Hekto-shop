import React from "react";
import styled from "styled-components";
import CartIcon from "../../../../icons/CartIcon";
import HeartIcon from "../../../../icons/HeartIcon";
import SearchPlus from "../../../../icons/SearchPlus";
import ProductIconHover from "../../../product-icon-hover/ProductIconHover";
import TextTruncate from "react-text-truncate";
import { mobile } from "../../../../responsive";
import { Link, useNavigate } from "react-router-dom";

const FeatureProductStyles = styled.div`
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  max-width: 270px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  :hover .feature-product-image-container {
    .feature-product-icon {
      display: flex;
    }
    .feature-product-detail {
      display: block;
      transform: translateY(-10%) translateX(-50%);
    }
  }
  :hover .feature-product-image {
    transform: scale(0.8);
    padding-bottom: 0;
  }
  :hover .feature-product-about {
    background: #2f1ac4;
    &-name,
    &-code,
    &-price {
      color: white;
    }
  }
  .feature-product-image-container {
    position: relative;
    background: #f6f7fb;

    overflow: hidden;

    .feature-product-detail {
      background: #08d15f;
      padding: 8px 12px;
      border-radius: 2px;
      color: white;
      position: absolute;
      bottom: 10px;
      left: 50%;
      /* display: none; */
      transform: translateX(-50%) translateY(150%);
      font-family: "Josefin Sans";
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
    }
    .feature-product-icon {
      cursor: pointer;
      display: flex;
      z-index: 50;
      height: 30px;
      position: absolute;
      top: 12px;
      left: 12px;
      display: none;
    }
    /* .product-icon {
      height: 100%;
      width: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      :hover {
        background-color: #eeeffb;
      }
    } */
    .feature-product-image {
      width: 100%;

      padding: 46px 40px 12px 40px;
      object-fit: cover;
    }
  }
  .feature-product-about {
    padding: 12px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 12px;
    &-name {
      font-family: "Lato";
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      color: ${(props) => props.theme.pinkSecondary};
      display: block;
      text-align: center;
      ${mobile({
        fontSize: "16px",
      })}
    }
    &-color {
      display: flex;
      justify-content: center;
      gap: 5px;
      span {
        display: block;
        width: 14px;
        height: 5px;
        border-radius: 10px;
        background-color: ${(props) => props.theme.pinkSecondary};
      }
    }
    &-code {
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      text-align: center;
      color: ${(props) => props.theme.purpleHeading};
      ${mobile({
        fontSize: "12px",
      })}
    }
    &-price {
      font-family: "Lato";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      text-align: center;
      color: ${(props) => props.theme.purpleHeading};
      ${mobile({
        fontSize: "12px",
      })}
    }
  }
`;

const FeatureProduct = ({ data = {} }) => {
  const navigate = useNavigate();
  return (
    <>
      <FeatureProductStyles>
        <div className="feature-product-image-container">
          <div className="feature-product-icon transition-all">
            <ProductIconHover
              productId={data._id}
              isHorizontal={true}
              className="icon-container"
            />
          </div>
          <img
            src={data.productImage}
            alt=""
            className="feature-product-image transition-all cursor-pointer"
            onClick={() => navigate(`/products/${data._id}`)}
          />
          <Link
            to={`/products/${data._id}`}
            className="feature-product-detail transition-all"
          >
            View Details
          </Link>
        </div>
        <div className="feature-product-about transition-all">
          <Link to={`/products/${data._id}`}>
            <TextTruncate
              line={1}
              element="h3"
              className="feature-product-about-name"
              truncateText="…"
              text={data.productName}
            />
          </Link>
          <div className="feature-product-about-color">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span className="feature-product-about-code">Code - Y523201</span>
          <span className="feature-product-about-price">
            ${data.price.toFixed(2)}
          </span>
        </div>
      </FeatureProductStyles>
    </>
  );
};

export default FeatureProduct;
