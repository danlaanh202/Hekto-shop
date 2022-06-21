import React from "react";
import styled from "styled-components";
import { useDropdown } from "./dropdown-context";
const DropdownDivStyles = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin: 10px 0;
`;
const DropdownDiv = ({ children }) => {
  const { nodeRef } = useDropdown();
  return <DropdownDivStyles ref={nodeRef}>{children}</DropdownDivStyles>;
};

export default DropdownDiv;
