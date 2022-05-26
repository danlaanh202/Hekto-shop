import React from "react";
import styled from "styled-components";
import FooterTitle from "./FooterTitle";
const CategoriesStyles = styled.div`
  .categories-container {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin: 60px 0;
  }
`;
const categories = [
  "Laptops & Computers",
  "Cameras & Photography",
  "Smart Phones & Tablets",
  "Video Games & Consoles",
  "Waterproof Headphones",
];
const Categories = () => {
  return (
    <CategoriesStyles>
      <FooterTitle>Categories</FooterTitle>
      <div className="categories-container">
        {categories.map((item) => (
          <span key={item} className="gray-text">
            {item}
          </span>
        ))}
      </div>
    </CategoriesStyles>
  );
};

export default Categories;
