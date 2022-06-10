import React from "react";
import styled from "styled-components";
const ShopexItemStyles = styled.div`
  .shopex-item {
    max-width: 270px;
    height: 320px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 44px 24px;
    gap: 20px;
    &-title {
      font-size: 22px;
      line-height: 26px;
      color: ${(props) => props.theme.purpleHeading};
    }
    &-description {
      font-family: "Lato";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 1.6;
      /* or 160% */
      color: rgba(26, 11, 91, 0.3);
      text-align: center;
    }
  }
`;

const ShopexItem = () => {
  return (
    <ShopexItemStyles>
      <div className="shopex-item shadow-lg">
        <img
          srcSet="/image/free-delivery.png"
          alt=""
          className="shopex-item-logo"
        />
        <h2 className="shopex-item-title">24/7 Support</h2>
        <p className="shopex-item-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
          gravida.
        </p>
      </div>
    </ShopexItemStyles>
  );
};

export default ShopexItem;
