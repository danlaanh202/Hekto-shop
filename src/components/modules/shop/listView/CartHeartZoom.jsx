import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CartIconBig, HeartIconBig, SearchPlusBig } from "../../../../icons";
import { addProduct } from "../../../../redux/cartRedux";

const CartHeartZoomStyles = styled.div`
  display: flex;
  gap: 20px;
  .icon {
    width: 36px;
    height: 36px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;
const CartHeartZoom = ({ productId = "20", price = 20 }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(addProduct({ _id: productId, price: price, amount: 1 }));
    navigate("/cart");
  };
  return (
    <CartHeartZoomStyles>
      <span className="icon">
        <CartIconBig onClick={addToCart} />
      </span>
      <span className="icon">
        <HeartIconBig />
      </span>
      <span className="icon">
        <SearchPlusBig />
      </span>
    </CartHeartZoomStyles>
  );
};

export default CartHeartZoom;
