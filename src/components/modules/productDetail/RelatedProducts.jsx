import React from "react";
import styled from "styled-components";
import RelatedItem from "./RelatedItem";
const RelatedProductsStyles = styled.div`
  margin-top: 120px;

  .title {
    font-size: 36px;
    line-height: 42px;
    color: #101750;
  }
  .products {
    margin: 48px 0;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 28px;
  }
`;
const RelatedProducts = () => {
  return (
    <RelatedProductsStyles className="container">
      <h3 className="title">Related Products</h3>
      <div className="products">
        <RelatedItem />
        <RelatedItem />
        <RelatedItem />
        <RelatedItem />
      </div>
    </RelatedProductsStyles>
  );
};

export default RelatedProducts;
