import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CustomCheckbox from "../listSearch/CustomCheckbox";
const CartTotalStyles = styled.div`
  flex: 1;

  .cart-total-heading {
    text-align: center;
    font-size: 20px;
    line-height: 23px;
    color: #1d3178;
    margin-bottom: 40px;
  }
  .cart-total-money {
    width: 100%;
    background: #f4f4fc;
    padding: 28px;
    &-item {
      display: flex;
      justify-content: space-between;
      border-bottom: 2px solid #e8e6f1;
      padding: 12px 0;
      margin: 20px 0;
      h4 {
        font-family: "Lato";
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        color: #1d3178;
      }
      .money {
        font-family: "Lato";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        color: #15245e;
      }
    }
    .checkbox-container {
      margin: 28px 0%;
      display: flex;
      align-items: center;
      gap: 12px;
      &-content {
        font-family: "Lato";
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;

        color: #8a91ab;
      }
    }
    .button-container {
      .button-checkout {
        padding: 12px 0;
        width: 100%;
        background: #19d16f;
        color: white;
        font-family: "Lato";
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
        border-radius: 4px;
      }
    }
  }
`;
const CartTotal = () => {
  const navigate = useNavigate();
  return (
    <CartTotalStyles className="cart-total-container">
      <h3 className="cart-total-heading ">Cart Totals</h3>
      <div className="cart-total-money">
        <div className="cart-total-money-item">
          <h4>Subtotals:</h4>
          <span className="money">£219.00</span>
        </div>

        <div className="cart-total-money-item">
          <h4>Totals:</h4>
          <span className="money">£219.00</span>
        </div>
        <div className="checkbox-container">
          <CustomCheckbox
            background="#FFFFFF"
            backgroundCheck="#19D16F"
            checkColor="#FFFFFF"
            unCheckColor="#19D16F"
          />
          <span className="checkbox-container-content">
            Shipping & taxes calculated at checkout
          </span>
        </div>
        <div className="button-container">
          <button
            onClick={() => navigate("/completed")}
            className="button-checkout"
          >
            Proceed To Checkout
          </button>
        </div>
      </div>
    </CartTotalStyles>
  );
};

export default CartTotal;
