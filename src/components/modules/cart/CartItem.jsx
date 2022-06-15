import React, { useEffect, useState } from "react";
import axios from "axios";
import TextTruncate from "react-text-truncate";
import styled from "styled-components";
import { CloseIcon } from "../../../icons";
import {
  decreaseAmount,
  increaseAmount,
  removeProduct,
} from "../../../redux/cartRedux";
import { useDispatch } from "react-redux";
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
      /* color: #bebfc2; */
    }
    .quantity-number {
      background: #f0eff2;
      height: 100%;
      width: 50px;
      display: block;
      text-align: center;
      /* color: #bebfc2; */
    }
  }
  .total-price {
    color: #15245e;
    margin-top: auto;
    margin-bottom: auto;
  }
`;
const CartItem = ({ productId = "", amount = 1, price = 0, dispatch }) => {
  const [cartItemData, setCartItemData] = useState({});

  const handleQuantity = (type) => {
    type === "inc"
      ? dispatch(increaseAmount({ _id: productId, price: price }))
      : dispatch(decreaseAmount({ _id: productId, price: price }));
  };
  useEffect(() => {
    const getItem = async () => {
      try {
        await axios
          .get(
            `${process.env.REACT_APP_API_URL}/product/get-product/${productId}`
          )
          .then((response) => setCartItemData(response.data));
      } catch (err) {
        console.log(err);
      }
    };
    getItem();
  }, []);
  return (
    <CartItemStyles className="cart-product-item cart-grid">
      <div className="product">
        <div className="img-container">
          <CloseIcon
            onClick={() => dispatch(removeProduct({ _id: productId }))}
            className="close-icon"
          />
          <img src={cartItemData.productImage} alt="" className="product-img" />
        </div>
        <div className="detail">
          <TextTruncate
            line={2}
            element="h4"
            className="title"
            truncateText="…"
            text={cartItemData.productName}
          />
          <div className="detail-more">Color: Brown</div>
          <div className="detail-more">Size: XL</div>
        </div>
      </div>
      <div className="price">
        <span className="text-base">${price.toFixed(2)}</span>
      </div>
      <div className="quantity">
        <button
          onClick={() => {
            handleQuantity("dec");
          }}
          className="handle-quantity text-base"
        >
          -
        </button>
        <span className="quantity-number text-base">{amount}</span>
        <button
          onClick={() => {
            handleQuantity("inc");
          }}
          className="handle-quantity text-base"
        >
          +
        </button>
      </div>
      <div className="total-price">
        <span className="text-base">${(price * amount).toFixed(2)}</span>
      </div>
    </CartItemStyles>
  );
};

export default CartItem;
