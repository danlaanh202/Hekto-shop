import React, { useState } from "react";
import styled from "styled-components";
import StarContainer from "../../../star/StarContainer";
import CartHeartZoom from "./CartHeartZoom";
const ListShopItemStyles = styled.div`
  display: flex;
  align-items: center;

  .product-image-container {
    width: 316px;
    height: 220px;
    margin: 20px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(243 244 246);
    img {
      object-fit: cover;
      height: 90%;
    }
  }
  .product-introduce {
    max-width: 600px;
    width: 100%;
    display: flex;
    gap: 15px;
    flex-direction: column;
    &-title {
      cursor: pointer;
      font-size: 19.8783px;
      line-height: 23px;
      color: ${(props) => props.theme.purpleHeading};
    }
    &-price-container {
      display: flex;
      gap: 10px;
      .price {
        font-size: 15.4609px;
        line-height: 18px;
      }
      .current-price {
        color: #111c85;
      }
      .old-price {
        color: #ff2aaa;
      }
    }
    &-description {
      font-family: "Lato";
      font-style: normal;
      font-weight: 400;
      font-size: 17.6696px;
      line-height: 31px;
      color: #9295aa;
    }
  }
`;
const ListShopItem = ({ data = {} }) => {
  const [star, setStar] = useState(3);
  console.log(data);
  return (
    <ListShopItemStyles>
      <div className="product-image-container">
        <img src={data.productImage} alt="" />
      </div>
      <div className="product-introduce">
        <h4 className="product-introduce-title">{data?.productName}</h4>
        <div className="product-introduce-price-container">
          <span className="current-price price">${data?.price.toFixed(2)}</span>
          <span className="old-price price">
            ${(data?.price + 10).toFixed(2)}
          </span>
          <div className="star-container">
            <StarContainer />
          </div>
        </div>
        <p className="product-introduce-description">{data?.description}</p>
        <div className="product-introduce-cart">
          <CartHeartZoom
            productId={data?.productId}
            price={data?.price}
          ></CartHeartZoom>
        </div>
      </div>
    </ListShopItemStyles>
  );
};

export default ListShopItem;
