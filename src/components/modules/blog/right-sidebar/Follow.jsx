import React from "react";
import styled from "styled-components";
import {
  FacebookIconShare,
  InstagramIconShare,
  TwitterIconShare,
} from "../../../../icons";

const FollowStyles = styled.div`
  .social-container {
    margin-left: 10px;
    .logo {
      transform: scale(2);
      margin-right: 24px;
    }
  }
`;
const Follow = () => {
  return (
    <FollowStyles>
      <h3 className="title">Follow</h3>
      <div className="social-container">
        <FacebookIconShare className="logo" />
        <InstagramIconShare className="logo" />
        <TwitterIconShare className="logo" />
      </div>
    </FollowStyles>
  );
};

export default Follow;
