import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../../../../responsive";
const SaleProductStyles = styled.div`
  width: 420px;
  background: #fff6fb;
  padding: 25px;
  position: relative;
  ${mobile({
    height: "200px",
  })}
  .sale-product-title {
    font-size: 26px;
    line-height: 30px;
    margin-bottom: 10px;
    z-index: 10;
  }
  .sale-product-navigate {
    font-family: "Lato";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    text-decoration-line: underline;
    color: ${(props) => props.theme.pinkSecondary};
    z-index: 10;
  }
  .sale-product-image {
    position: absolute;
    right: 8px;
    bottom: 4px;
    z-index: 0;

    ${mobile({
      right: "20px",
      bottom: "0px",
      height: "130px",
    })}
  }
`;
const SaleProduct = ({ link = "Shop Now", url = "/", imageUrl = "" }) => {
  return (
    <SaleProductStyles>
      <h2 className="sale-product-title">23% off in all products</h2>
      <Link className="sale-product-navigate" to={url}>
        {link}
      </Link>
      <img
        srcSet={imageUrl || "/image/clock-sale.png"}
        alt=""
        className="sale-product-image"
      />
    </SaleProductStyles>
  );
};

export default SaleProduct;
