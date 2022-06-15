import React from "react";
import { Link } from "react-router-dom";
import styled, { withTheme } from "styled-components";
import { AuthorIcon, DateIcon } from "../../../../icons";
import { mobile } from "../../../../responsive";

const LatestBlogItemStyles = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  .img-container {
  }
  .latest-blog-content {
    ${mobile({
      position: "absolute",
      inset: 0,
      background: "rgba(0, 0, 0, 0.6)",
      justifyContent: "center",
      alignItems: "center",
    })}
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
            line-height: 1.1;

            color: #151875;
            ${mobile({
              color: "white",
            })}
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
        line-height: 1.2;

        /* Text */

        color: #151875;
        ${mobile({
          color: "white",
        })}
      }
      .description {
        font-family: "Lato";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 1.88;
        color: #72718f;
        ${mobile({
          display: "none",
        })}
      }
    }
    .read-more {
      font-family: "Lato";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 1.88;

      text-decoration-line: underline;

      /* Text */

      color: #151875;
      ${mobile({
        border: "1px solid white",
        color: "white",
        textDecoration: "none",
        padding: "2px 10px",
      })}
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
