import React from "react";
import styled from "styled-components";
const CategoriesPartStyles = styled.div`
  .categories-container {
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    .categories-item {
      text-align: center;
      padding: 8px 0;
      color: #3f509e;
      width: calc(50% - 20px);
      border-radius: 4px;
    }
    .active {
      background: #f939bf;
      color: white;
    }
  }
`;
const CategoriesPart = () => {
  return (
    <CategoriesPartStyles>
      <h3 className="title">Categories</h3>
      <div className="categories-container">
        <div className="categories-item text-base active">Hobbies (14)</div>
        <div className="categories-item text-base">Hobbies (14)</div>
        <div className="categories-item text-base">Hobbies (14)</div>
        <div className="categories-item text-base">Hobbies (14)</div>
        <div className="categories-item text-base">Hobbies (14)</div>
      </div>
    </CategoriesPartStyles>
  );
};

export default CategoriesPart;
