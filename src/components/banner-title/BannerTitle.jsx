import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile } from "../../responsive";
const BannerTitleStyles = styled.div`
  background: ${(props) => props.theme.bannnerTitleBackground};
  height: 286px;
  ${mobile({
    height: "150px",
  })}
  .container {
    height: 100%;
    display: flex;
    /* align-items: center; */
    justify-content: center;
    flex-direction: column;
    ${mobile({
      marginLeft: "20px",
    })}
    .title {
      font-size: 36px;
      line-height: 1.2;
      color: #101750;
      ${mobile({
        fontSize: "20px",
      })}
    }
    .path {
      &-to {
        font-family: "Lato";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 1.2;
        ${mobile({
          fontSize: "12px",
        })}
      }
      .active {
        color: ${(props) => props.theme.pinkSecondary};
      }
      .dot {
        margin: 0 5px;
        height: 5px;
        width: 5px;
        font-size: 20px;
      }
    }
  }
`;

const BannerTitle = ({ title }) => {
  return (
    <BannerTitleStyles>
      <div className="container">
        <h3 className="title">{title}</h3>
        <div className="path">
          <Link to="/" className="path-to">
            Home
          </Link>
          <span className="dot">.</span>
          <Link to={`/${title}`} className="path-to active">
            {title}
          </Link>
        </div>
      </div>
    </BannerTitleStyles>
  );
};

export default BannerTitle;
