import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AuthorIcon, DateIcon } from "../../../icons";
const BlogItemStyles = styled.div`
  margin: 50px 0;
  .image-container {
    border-radius: 8px;
    img {
      border-radius: inherit;
    }
  }
  .author-time {
    margin: 28px 0;
    .author {
      display: flex;
      gap: 20px;
      &-item {
        display: flex;
        align-items: center;
        gap: 10px;
        span {
          text-align: center;
          width: 130px;
          display: block;
          padding: 5px 0;
          border-radius: 2px;
          background: #ffe7f9;
          font-family: "Lato";
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          line-height: 17px;

          color: #151875;
        }
      }
    }
  }
  .blog-title {
    font-size: 30px;
    line-height: 35px;

    color: ${(props) => props.theme.purpleHeading};
  }
  .blog-description {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;

    color: #8a8fb9;
    margin: 32px 0;
  }
  .blog-more {
    font-family: "Lato";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;

    color: #151875;
  }
`;
const BlogItem = () => {
  return (
    <BlogItemStyles className="blog-item">
      <div className="image-container">
        <img srcSet="/image/blog-image-1.png" alt="" />
      </div>
      <div className="author-time">
        <div className="author">
          <div className="author-item">
            <AuthorIcon />
            <span>Surf Auxion</span>
          </div>
          <div className="author-item">
            <DateIcon />
            <span>May 28 2022</span>
          </div>
        </div>
      </div>
      <h2 className="blog-title">
        Mauris at orci non vulputate diam tincidunt nec.
      </h2>
      <p className="blog-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis
        quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae
        ultrices in in neque, porta dignissim. Adipiscing purus, cursus
        vulputate id id dictum at.
      </p>
      {/* the link tag below is navigate to blog id */}
      <Link to="/blog" className="blog-more">
        Read More
      </Link>
    </BlogItemStyles>
  );
};

export default BlogItem;
