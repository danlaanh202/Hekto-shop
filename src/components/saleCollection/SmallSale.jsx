import React from "react";
import styled from "styled-components";
import SmallSaleProduct from "./SmallSaleProduct";
const SmallSaleStyles = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 20px;
  .small-sale-product {
    display: flex;
    align-items: center;
    &-image {
      background: #f5f6f8;
      padding: 4px 10px;
    }
    &-about {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;
const SmallSale = () => {
  return (
    <SmallSaleStyles className="shadow-lg">
      <SmallSaleProduct></SmallSaleProduct>
      <SmallSaleProduct></SmallSaleProduct>
      <SmallSaleProduct></SmallSaleProduct>
    </SmallSaleStyles>
  );
};

export default SmallSale;
