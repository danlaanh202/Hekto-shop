import React from "react";
import styled from "styled-components";
import FooterTitle from "./FooterTitle";
const PagesStyles = styled.div`
  .customer-care-container {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin: 60px 0;
  }
`;
const pages = [
  "Blog",
  "Browse the Shop",
  "Category",
  "Pre-Built Pages",
  "Visual Composer Elements",
  "WooCommerce Pages",
];
const Pages = () => {
  return (
    <PagesStyles>
      <FooterTitle>Pages</FooterTitle>
      <div className="customer-care-container">
        {pages.map((item) => (
          <span key={item} className="gray-text">
            {item}
          </span>
        ))}
      </div>
    </PagesStyles>
  );
};

export default Pages;
