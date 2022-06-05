import React from "react";
import styled from "styled-components";
import BannerTitle from "../components/banner-title/BannerTitle";
import RightSidebar from "../components/modules/blog/right-sidebar/RightSidebar";
import Sponsor from "../components/sponsor/Sponsor";
import { AuthorIcon, DateIcon, NextIcon, PrevIcon } from "../icons";
const SingleBlogPageStyles = styled.div`
  .single-blog {
    display: flex;
    gap: 40px;
    margin: 50px auto;
    .blog {
      width: 870px;
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
      .blog-subtitle {
        font-family: "Lato";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        color: #8a8fb9;
        margin: 32px 0;
      }
      .blog-content {
        font-family: "Lato";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        color: #8a8fb9;
        margin: 32px 0;
      }
      .quote {
        border-left: 2px solid #fc45a0;
        padding: 20px 14px;
        font-size: 18px;
        line-height: 21px;

        color: #969cb4;
        margin: 32px 0;
      }
      .video-container {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 245px;
        object-fit: cover;
        margin: 32px 0;
      }
      .prev-next {
        display: flex;
        justify-content: space-between;
        padding: 12px 24px;
        background: #f7f8fb;
        border-radius: 2.30769px;
        align-items: center;
        &-item {
          cursor: pointer;
          span {
            margin: 0 10px;
            font-family: "Lato";
            font-style: normal;
            font-weight: 500;
            font-size: 16.1538px;
            line-height: 19px;
            color: #8a8fb9;
          }
        }
      }
      .relate-blog {
        margin: 32px 0;
        .relate-item {
          display: flex;
          gap: 20px;
          align-items: center;
          padding: 16px;
          margin: 32px 0;
          .relate-img-container {
            border-radius: 4px;
            width: 104px;
            img {
              border-radius: inherit;
              width: 100%;
            }
          }
          .relate-content {
            .title-container {
              display: flex;
              gap: 50px;
              align-items: center;
              .title {
                font-size: 18.1374px;
                line-height: 21px;
                letter-spacing: 0.01em;

                color: #363385;
              }
              .date {
                font-family: "Lato";
                font-style: normal;
                font-weight: 400;
                font-size: 12.4695px;
                line-height: 15px;
                color: #a3a2b6;
              }
            }
            .description {
              font-family: "Lato";
              font-style: normal;
              font-weight: 400;
              font-size: 12.4695px;
              line-height: 28px;
              color: #a3a2b6;
            }
          }
        }
      }
    }
  }
`;
const SingleBlogPage = () => {
  return (
    <SingleBlogPageStyles>
      <BannerTitle title="Single Blog"></BannerTitle>
      <div className="container single-blog">
        <div className="blog">
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
          <p className="blog-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
            facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
            malesuada vitae ultrices in in neque, porta dignissim. Adipiscing
            purus, cursus vulputate id id dictum at.
          </p>
          <p className="blog-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
            dapibus est, nunc, montes, lacus consequat integer viverra. Sit
            morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
            posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Velit dapibus est, nunc, montes, lacus consequat integer
            viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec
            vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Velit dapibus est, nunc,
          </p>
          <div className="quote">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
            dictum sapien, amet, consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Commodo dictum sapien, amet, consequat
            toamk risusu”
          </div>
          <div className="video-container">
            <img srcSet="/image/video-mock-1.png" alt="" />
          </div>
          <div className="prev-next">
            <div className="prev-next-item">
              <PrevIcon />
              <span>Previous Post</span>
            </div>
            <div className="prev-next-item">
              <span>Next Post</span>
              <NextIcon />
            </div>
          </div>
          <div className="relate-blog">
            <div className="relate-item shadow-lg">
              <div className="relate-img-container">
                <img
                  srcSet="/image/related-blog-img-1.png"
                  alt=""
                  className=""
                />
              </div>
              <div className="relate-content">
                <div className="title-container">
                  <h3 className="title">Sapien ac</h3>
                  <span className="date">May 29 2022</span>
                </div>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in
                  vitae rutrum vulputate consectetur.
                </p>
              </div>
            </div>
            <div className="relate-item shadow-lg">
              <div className="relate-img-container">
                <img
                  srcSet="/image/related-blog-img-1.png"
                  alt=""
                  className=""
                />
              </div>
              <div className="relate-content">
                <div className="title-container">
                  <h3 className="title">Sapien ac</h3>
                  <span className="date">May 29 2022</span>
                </div>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in
                  vitae rutrum vulputate consectetur.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="right-sidebar">
          <RightSidebar></RightSidebar>
        </div>
      </div>
      <div className="container">
        <Sponsor />
      </div>
    </SingleBlogPageStyles>
  );
};

export default SingleBlogPage;
