import React from "react";
import styled from "styled-components";
import { CloseIcon } from "../../../icons";
const CartItemStyles = styled.div`
  border-bottom: 1px solid #e1e1e4;
  padding: 12px 0;
  .product {
    display: flex;
    align-items: center;
    gap: 16px;
    .img-container {
      position: relative;
      .product-img {
        width: 80px;
        height: 80px;
        object-fit: cover;
      }
      .close-icon {
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
      }
    }
    .detail {
      .title {
        font-size: 14px;
        line-height: 16px;
        margin: 10px 0;
      }
      &-more {
        font-size: 14px;
        line-height: 16px;
        color: #a1a8c1;
        margin: 8px 0;
      }
    }
  }
  .price {
    margin-top: auto;
    margin-bottom: auto;
    .text-base {
      color: #15245e;
    }
  }
  .quantity {
    margin-top: auto;
    margin-bottom: auto;
    height: 15px;
    display: flex;
    .handle-quantity {
      width: 12px;
      height: 100%;
      background: #e7e7ef;
      color: #bebfc2;
    }
    .quantity-number {
      background: #f0eff2;
      height: 100%;
      width: 50px;
      display: block;
      text-align: center;
      color: #bebfc2;
    }
  }
  .total-price {
    color: #15245e;
    margin-top: auto;
    margin-bottom: auto;
  }
`;
const CartItem = () => {
  return (
    <CartItemStyles className="cart-product-item cart-grid">
      <div className="product">
        <div className="img-container">
          <CloseIcon className="close-icon" />
          <img
            srcSet="/image/image-cart-1.png"
            alt=""
            className="product-img"
          />
        </div>
        <div className="detail">
          <h4 className="title">Vel faucibus posuere</h4>
          <div className="detail-more">Color: Brown</div>
          <div className="detail-more">Size: XL</div>
        </div>
      </div>
      <div className="price">
        <span className="text-base">$32.00</span>
      </div>
      <div className="quantity">
        <button className="handle-quantity text-base">-</button>
        <span className="quantity-number text-base">1</span>
        <button className="handle-quantity text-base">+</button>
      </div>
      <div className="total-price">
        <span className="text-base">£219.00</span>
      </div>
    </CartItemStyles>
  );
};

export default CartItem;
