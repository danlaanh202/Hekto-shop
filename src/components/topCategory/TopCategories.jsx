import React from "react";
import styled from "styled-components";
import Title from "../title/Title";
import TopItem from "./TopItem";
const TopCategoriesStyles = styled.div`
  margin-bottom: 50px;
  .container {
    .top-categories {
      display: flex;
      justify-content: space-between;
    }
  }
`;
const TopCategories = () => {
  return (
    <TopCategoriesStyles>
      <div className="container">
        <Title>Top Categories</Title>
        <div className="top-categories">
          <TopItem></TopItem>
          <TopItem></TopItem>
          <TopItem></TopItem>
          <TopItem></TopItem>
        </div>
      </div>
    </TopCategoriesStyles>
  );
};

export default TopCategories;
