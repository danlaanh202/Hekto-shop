import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AuthorIcon, DateIcon } from "../../icons";
const LatestBlogItemStyles = styled.div`
  display: flex;
  flex-direction: column;
  .img-container {
  }
  .latest-blog-content {
    /* align-items: center; */
    display: flex;
    flex-direction: column;
    gap: 10px;
    .author-time {
      margin: 14px 0;
      .author {
        display: flex;
        gap: 10px;
        &-item {
          display: flex;
          align-items: center;
          gap: 10px;
          span {
            text-align: center;

            display: block;
            padding: 2px 0;
            border-radius: 2px;

            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 16px;

            color: #151875;
          }
        }
      }
    }
    .content-container {
      display: flex;
      flex-direction: column;

      gap: 12px;
      .title {
        font-size: 18px;
        line-height: 21px;

        /* Text */

        color: #151875;
      }
      .description {
        font-family: "Lato";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 30px;
        /* or 188% */

        color: #72718f;
      }
    }
    .read-more {
      font-family: "Lato";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 30px;
      /* identical to box height, or 188% */

      text-decoration-line: underline;

      /* Text */

      color: #151875;
    }
  }
`;

const LatestBlogItem = () => {
  return (
    <LatestBlogItemStyles>
      <div className="img-container">
        <img
          srcSet="/image/latest-blog-image.png"
          alt=""
          className="latest-blog-image"
        />
      </div>
      <div className="latest-blog-content">
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
        <div className="content-container">
          <h4 className="title">Top esssential Trends in 2021</h4>
          <p className="description">
            More off this less hello samlande lied much over tightly circa horse
            taped mightly
          </p>
        </div>
        <Link className="read-more" to="/">
          Read More
        </Link>
      </div>
    </LatestBlogItemStyles>
  );
};

export default LatestBlogItem;
