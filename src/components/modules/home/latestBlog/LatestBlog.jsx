import React from "react";
import styled from "styled-components";
import { mobile } from "../../../../responsive";
import Title from "../../../title/Title";

import LatestBlogItem from "./LatestBlogItem";
const LatestBlogStyles = styled.div`
  .latest-blog-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 56px;
    ${mobile({
      flexDirection: "column",
      gap: "20px",
    })}
  }
`;

const LatestBlog = () => {
  return (
    <LatestBlogStyles>
      <div className="container">
        <Title>Latest Blog</Title>
        <div className="latest-blog-container">
          <LatestBlogItem></LatestBlogItem>
          <LatestBlogItem></LatestBlogItem>
          <LatestBlogItem></LatestBlogItem>
        </div>
      </div>
    </LatestBlogStyles>
  );
};

export default LatestBlog;
