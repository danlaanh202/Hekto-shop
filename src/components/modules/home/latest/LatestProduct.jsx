import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../../../../responsive";
import ProductIconHover from "../../../product-icon-hover/ProductIconHover";

const LatestProductStyles = styled.div`
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  margin-bottom: 30px;
  .latest-product {
    max-width: 360px;
    ${mobile({
      maxWidth: "152px",
    })}
    &-image {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 33px 64px 8px 73px;
      background: ${(props) => props.theme.latestItemBackground};
      position: relative;
      cursor: pointer;
      width: 360px;
      height: 270px;
      ${mobile({
        padding: "10px 10px 10px 10px",
        width: "160px",
        height: "150px",
      })}
      &-item {
        ${mobile({
          width: "80%",
          height: "80%",
        })}
      }
      .latest-products-icon {
        cursor: pointer;
        display: flex;
        z-index: 50;
        width: 30px;
        position: absolute;
        left: 15px;
        bottom: 40px;
        flex-direction: column;
        display: none;

        ${mobile({
          left: "5px",
          width: "15px",
          display: "block",
          bottom: "15px",
        })}
        .latest-product-icon {
          width: 100%;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;

          :hover {
            background-color: #eeeffb;
          }
        }
      }
    }
    &-about {
      display: flex;
      justify-content: space-between;
      padding: 12px 8px;
      ${mobile({
        flexDirection: "column",
      })}
      &-title {
        font-family: "Josefin Sans";
        font-size: 16px;
        line-height: 19px;
        color: ${(props) => props.theme.purpleHeading};
        cursor: pointer;
        ${mobile({
          fontSize: "14px",
        })}
      }
      &-price {
        &-normal {
          margin-left: 12px;
          font-family: "Josefin Sans";
          font-size: 12px;
          line-height: 14px;
          text-decoration-line: line-through;
          color: ${(props) => props.theme.latestNormalPrice};
          ${mobile({
            fontSize: "12px",
          })}
        }
        &-sale {
          font-family: "Josefin Sans";
          font-size: 14px;
          line-height: 16px;
          color: ${(props) => props.theme.purpleHeading};
          ${mobile({
            fontSize: "10px",
          })}
        }
      }
    }
  }

  :hover .latest-product-image {
    .latest-product-image-sale {
      display: block;
    }
    :hover .latest-products-icon {
      display: flex;
      .latest-product-icon {
        path {
          fill: #1389ff;
        }
      }
      .latest-product-icon:hover {
        path {
          fill: #2f1ac4;
        }
      }
    }
    :hover .latest-product-image-item {
      transform: scale(0.8);
      padding-bottom: 0;
    }
  }
`;
const IsSaleImage = styled.img`
  position: absolute;
  z-index: 60;
  top: 25px;
  left: 18px;
  display: none;
`;
const LatestProduct = ({ isSale, data }) => {
  return (
    <LatestProductStyles>
      <div className="latest-product">
        <div className="latest-product-image">
          {isSale && (
            <IsSaleImage
              srcSet="/image/sale.png"
              className="latest-product-image-sale transition-all"
            />
          )}

          <div className="latest-products-icon transition-all">
            {/* <CartIcon className="latest-product-icon "></CartIcon>
            <HeartIcon className="latest-product-icon "></HeartIcon>
            <SearchPlus className="latest-product-icon "></SearchPlus> */}
            <ProductIconHover isHorizontal={false} className="icon-container" />
          </div>
          <img
            src={data.productImage}
            alt=""
            className="latest-product-image-item transition-all"
          />
        </div>
        <div className="latest-product-about">
          <Link
            to={`/products/${data._id}`}
            className="latest-product-about-title"
          >
            {data.productName}
          </Link>
          <div className="latest-product-about-price">
            <span className="latest-product-about-price-sale">
              ${data.price.toFixed(2)}
            </span>
            <span className="latest-product-about-price-normal">$65.00</span>
          </div>
        </div>
      </div>
    </LatestProductStyles>
  );
};

export default LatestProduct;
