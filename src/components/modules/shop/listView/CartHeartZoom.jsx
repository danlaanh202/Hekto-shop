import React from "react";
import styled from "styled-components";
import { CartIconBig, HeartIconBig, SearchPlusBig } from "../../../../icons";

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
const CartHeartZoom = () => {
  return (
    <CartHeartZoomStyles>
      <span className="icon">
        <CartIconBig />
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
