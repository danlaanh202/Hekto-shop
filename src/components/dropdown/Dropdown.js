import React from "react";
import styled from "styled-components";
import { DropdownProvider } from "./dropdown-context";
const DropdownDiv = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin: 10px 0;
`;
const Dropdown = ({ children, ...props }) => {
  return (
    <DropdownProvider {...props}>
      <DropdownDiv>{children}</DropdownDiv>
    </DropdownProvider>
  );
};

export default Dropdown;
