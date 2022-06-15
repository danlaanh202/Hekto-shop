import React from "react";
import styled from "styled-components";
import { mobile } from "../../../../responsive";

import Title from "../../../title/Title";
import ShopexItem from "./ShopexItem";

const ShopexOfferStyles = styled.div`
  .shopex-title {
    text-align: center;
    margin: 52px;
  }
  .shopex {
    display: flex;
    justify-content: space-between;
    ${mobile({
      flexDirection: "column",
    })}
  }
`;

const ShopexOffer = () => {
  return (
    <ShopexOfferStyles>
      <div className="container">
        <Title className="shopex-title">What Shopex Offer</Title>
        <div className="shopex">
          <ShopexItem></ShopexItem>
          <ShopexItem></ShopexItem>
          <ShopexItem></ShopexItem>
          <ShopexItem></ShopexItem>
        </div>
      </div>
    </ShopexOfferStyles>
  );
};

export default ShopexOffer;
