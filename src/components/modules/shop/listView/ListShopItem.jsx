import React, { useState } from "react";
import styled from "styled-components";
import StarContainer from "../../../star/StarContainer";
import CartHeartZoom from "./CartHeartZoom";
const ListShopItemStyles = styled.div`
  display: flex;
  align-items: center;

  .product-image-container {
    margin: 20px;
    cursor: pointer;
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
const ListShopItem = () => {
  const [star, setStar] = useState(3);
  return (
    <ListShopItemStyles>
      <div className="product-image-container">
        <img srcSet="/image/list-view-item-1.png" alt="" />
      </div>
      <div className="product-introduce">
        <h4 className="product-introduce-title">Accumsan tincidunt</h4>
        <div className="product-introduce-price-container">
          <span className="current-price price">$26.00</span>
          <span className="old-price price">$52.00</span>
          <div className="star-container">
            <StarContainer />
          </div>
        </div>
        <p className="product-introduce-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </p>
        <div className="product-introduce-cart">
          <CartHeartZoom></CartHeartZoom>
        </div>
      </div>
    </ListShopItemStyles>
  );
};

export default ListShopItem;
