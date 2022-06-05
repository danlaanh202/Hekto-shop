import React from "react";
import styled from "styled-components";
const RecentPostStyles = styled.div`
  .recent-posts-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    .item {
      display: flex;
      height: 50px;
      gap: 4px;
      .img-container {
        width: 70px;
        height: 100%;
      }
      .post-about-container {
        margin: auto 0;
        .post-title {
          color: #3f509e;
          margin-bottom: 4px;
        }
        .post-date {
          font-family: "Lato";
          font-style: normal;
          font-weight: 600;
          font-size: 11px;
          line-height: 13px;
          color: #8a8fb9;
        }
      }
    }
  }
`;
const RecentPost = () => {
  return (
    <RecentPostStyles>
      <h3 className="title">Recent Post</h3>
      <div className="recent-posts-container">
        <div className="item">
          <div className="img-container">
            <img srcSet="/image/recent-1.png" alt="" className="" />
          </div>
          <div className="post-about-container">
            <div className="post-title text-base">
              It is a long established fact
            </div>
            <div className="post-date">May 28 2022</div>
          </div>
        </div>
      </div>
    </RecentPostStyles>
  );
};

export default RecentPost;
