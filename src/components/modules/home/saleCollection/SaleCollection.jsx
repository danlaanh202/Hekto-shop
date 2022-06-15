import React from "react";
import styled from "styled-components";
import { mobile } from "../../../../responsive";
import SaleProduct from "./SaleProduct";
import SmallSale from "./SmallSale";
const SaleCollectionStyles = styled.div`
  .container {
    display: flex;
    gap: 30px;
    ${mobile({
      flexDirection: "column",
    })}
  }
`;
const SaleCollection = () => {
  return (
    <SaleCollectionStyles>
      <div className="container">
        <SaleProduct></SaleProduct>
        <SaleProduct
          link="View Collection"
          imageUrl="/image/table-sale.png"
        ></SaleProduct>
        <SmallSale></SmallSale>
      </div>
    </SaleCollectionStyles>
  );
};

export default SaleCollection;
