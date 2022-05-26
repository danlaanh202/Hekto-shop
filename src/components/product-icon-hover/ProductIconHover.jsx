import React from "react";
import styled from "styled-components";
import CartIcon from "../../icons/CartIcon";
import HeartIcon from "../../icons/HeartIcon";
import SearchPlus from "../../icons/SearchPlus";
const ProductIconHoverStyles = styled.div`
  display: flex;
  gap: 10px;

  .product-icon {
    z-index: 100;
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    path {
      fill: #1389ff;
    }
    :hover {
      background-color: ${(props) => props.background || "#eeeffb"};
      path {
        fill: #2f1ac4;
      }
    }
  }
`;
const ProductIconHover = ({
  isHorizontal = false,
  className,
  background = "",
}) => {
  return (
    <ProductIconHoverStyles
      background={background}
      style={
        !isHorizontal ? { flexDirection: "column" } : { flexDirection: "row" }
      }
    >
      <CartIcon className="product-icon "></CartIcon>
      <HeartIcon className="product-icon "></HeartIcon>
      <SearchPlus className="product-icon "></SearchPlus>
    </ProductIconHoverStyles>
  );
};

export default ProductIconHover;
