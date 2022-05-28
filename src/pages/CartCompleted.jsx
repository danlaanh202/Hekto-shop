import React from "react";
import styled from "styled-components";
import BannerTitle from "../components/banner-title/BannerTitle";
import PrimaryButton from "../components/button/PrimaryButton";
import Sponsor from "../components/sponsor/Sponsor";
import { CompletedIcon } from "../icons";
const CartCompletedStyles = styled.div`
  .complete {
    margin: 80px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-width: 720px;
    gap: 28px;
    .tick {
      margin-bottom: 40px;
    }
    .thank {
      font-family: "Lato";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 30px;

      text-align: center;

      color: #8d92a7;
    }
    .annoucement {
      font-size: 36px;
      line-height: 42px;

      color: #101750;
    }
    .continue {
      font-family: "Lato";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 30px;
      min-width: 240px;
    }
  }
`;
const CartCompleted = () => {
  return (
    <CartCompletedStyles>
      <BannerTitle title="Order Completed"></BannerTitle>
      <div className="container complete">
        <CompletedIcon className="tick"></CompletedIcon>
        <h2 className="annoucement">Your Order Is Completed!</h2>
        <div className="thank">
          Thank you for your order! Your order is being processed and will be
          completed within 3-6 hours. You will receive an email confirmation
          when your order is completed.
        </div>
        <PrimaryButton to="/" className="continue">
          Continue Shopping
        </PrimaryButton>
        <Sponsor />
      </div>
    </CartCompletedStyles>
  );
};

export default CartCompleted;
