import React from "react";
import styled from "styled-components";
import { mobile } from "../../../../responsive";
import ProductIconHover from "../../../product-icon-hover/ProductIconHover";
const color = [
  {
    name: "orange",
    hex: "#DE9034",
  },
  {
    name: "pink",
    hex: "#EC42A2",
  },
  {
    name: "blue",
    hex: "#8568FF",
  },
];
const GridShopItemStyles = styled.div`
  .product-image-container {
    position: relative;
    background: ${(props) => props.theme.shopItemBackground};
    height: 280px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;
    ${mobile({
      height: "150px",
    })}
    .product-image {
      ${mobile({
        height: "80%",
      })}
    }
    :hover {
      background: #ebf4f3;
      .product-image {
        transform: scale(0.9);
      }
      .product-image-container-icon {
        opacity: 1;
      }
    }
    &-icon {
      position: absolute;
      left: 12px;
      bottom: 24px;
      opacity: 0;
      ${mobile({
        opacity: "1",
      })}
    }
  }
  .product-introduce {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
    &-title {
      font-size: 18px;
      line-height: 1.2;
      color: ${(props) => props.theme.purpleHeading};
      ${mobile({
        fontSize: "12px",
      })}
    }
    .color-picker {
      display: flex;
      margin: 8px 0;
      gap: 8px;
      &-item {
        display: block;
        width: 10px;
        height: 10px;
        border-radius: 100rem;
        cursor: pointer;
        /* background-color: black; */
      }
    }
    .product-introduce-price {
      .price {
        font-size: 14px;
        line-height: 1.1;
        margin: 0 8px;
        ${mobile({
          fontSize: "10px",
        })}
      }
      .current-price {
        color: ${(props) => props.theme.purpleHeading};
      }
      .old-price {
        text-decoration-line: line-through;
        color: ${(props) => props.theme.pinkSecondary};
      }
    }
  }
`;
const GridShopItem = ({ data }) => {
  return (
    <GridShopItemStyles>
      <div className="product-image-container">
        <div className="product-image-container-icon transition-all">
          <ProductIconHover
            productId={data._id}
            price={data.price}
            background="white"
          ></ProductIconHover>
        </div>
        <img
          src={data.productImage}
          alt=""
          className="product-image transition-all"
        />
      </div>
      <div className="product-introduce">
        <h4 className="product-introduce-title">{data.productName}</h4>
        <div className="color-picker">
          {color.map((item) => (
            <span
              key={item.hex}
              className="color-picker-item"
              style={{ backgroundColor: item.hex }}
            ></span>
          ))}
        </div>
        <div className="product-introduce-price">
          <span className="current-price price">{data.price.toFixed(2)}</span>
          <span className="old-price price">
            {(data.price + 10).toFixed(2)}
          </span>
        </div>
      </div>
    </GridShopItemStyles>
  );
};

export default GridShopItem;
