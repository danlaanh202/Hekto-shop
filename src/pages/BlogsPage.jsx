import React from "react";
import styled from "styled-components";
import BannerTitle from "../components/banner-title/BannerTitle";
import BlogItem from "../components/modules/blog/BlogItem";
import RightSidebar from "../components/modules/blog/right-sidebar/RightSidebar";
import Sponsor from "../components/sponsor/Sponsor";
const BlogsPageStyles = styled.div`
  .blog-container {
    display: flex;
    gap: 56px;
    margin: 50px auto;
    .blog-lists {
      width: 870px;
    }
    .right-side-bar {
      flex: 1;
    }
  }
`;
const BlogsPage = () => {
  return (
    <BlogsPageStyles>
      <BannerTitle title="Blogs"></BannerTitle>
      <div className="container blog-container">
        <div className="blog-lists">
          <BlogItem></BlogItem>
          <BlogItem></BlogItem>
        </div>
        <div className="right-side-bar">
          <RightSidebar />
        </div>
      </div>
      <Sponsor className="container"></Sponsor>
    </BlogsPageStyles>
  );
};

export default BlogsPage;
