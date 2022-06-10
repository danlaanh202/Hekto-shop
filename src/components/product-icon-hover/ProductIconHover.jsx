import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import CartIcon from "../../icons/CartIcon";
import HeartIcon from "../../icons/HeartIcon";
import SearchPlus from "../../icons/SearchPlus";
import { addProduct } from "../../redux/cartRedux";
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
  productId,
  price,
}) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    console.log("aaa");
    dispatch(addProduct({ _id: 25, price: 20, amount: 1 }));
  };
  return (
    <ProductIconHoverStyles
      background={background}
      style={
        !isHorizontal ? { flexDirection: "column" } : { flexDirection: "row" }
      }
    >
      <CartIcon className="product-icon " onClick={addToCart}></CartIcon>
      <HeartIcon className="product-icon "></HeartIcon>
      <SearchPlus className="product-icon "></SearchPlus>
    </ProductIconHoverStyles>
  );
};

export default ProductIconHover;
