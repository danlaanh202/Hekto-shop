import React from "react";
import styled from "styled-components";
import SearchSidebar from "./SearchSidebar";
const RightSidebarStyles = styled.div`
  margin: 50px 0;
`;
const RightSidebar = () => {
  return (
    <RightSidebarStyles>
      <SearchSidebar />
    </RightSidebarStyles>
  );
};

export default RightSidebar;
