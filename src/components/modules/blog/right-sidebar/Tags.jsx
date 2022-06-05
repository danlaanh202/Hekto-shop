import React from "react";
import styled from "styled-components";
const TagsStyles = styled.div`
  .tags-container {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    .active {
      color: #fb2e86;
    }
    span {
      text-decoration: underline;
      font-family: "Lato";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 26px;
    }
  }
`;
const Tags = () => {
  return (
    <TagsStyles>
      <h3 className="title">Tags</h3>
      <div className="tags-container">
        <span>General</span>
        <span>General</span>
        <span className="active">General</span>
        <span>General</span>
        <span>General</span>
        <span>General</span>
      </div>
    </TagsStyles>
  );
};

export default Tags;
