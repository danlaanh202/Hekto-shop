import React from "react";
import styled from "styled-components";
import StarContainer from "../../star/StarContainer";
const RelatedItemStyles = styled.div`
  .img-container {
    margin-bottom: 20px;
  }
  .purple-heading {
    color: ${(props) => props.theme.purpleHeading};
  }
  .product {
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &-name {
      font-size: 16px;
      line-height: 19px;
    }
  }
  .price {
    font-size: 13px;
    line-height: 15px;
  }
`;
const RelatedItem = () => {
  return (
    <RelatedItemStyles>
      <div className="img-container">
        <img srcSet="image/related-img-1.png" alt="" className="" />
      </div>
      <div className="product">
        <h5 className="product-name purple-heading">Mens Fashion Wear</h5>
        <StarContainer></StarContainer>
      </div>
      <span className="price purple-heading">$43.00</span>
    </RelatedItemStyles>
  );
};

export default RelatedItem;
