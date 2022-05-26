import React from "react";
import styled from "styled-components";
const LatestBlogItemStyles = styled.div`
  display: flex;
  flex-direction: column;
`;

const LatestBlogItem = () => {
  return (
    <LatestBlogItemStyles>
      <img
        srcSet="/image/latest-blog-image.png"
        alt=""
        className="latest-blog-image"
      />
    </LatestBlogItemStyles>
  );
};

export default LatestBlogItem;
