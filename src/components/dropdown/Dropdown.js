import React from "react";
import styled from "styled-components";
import { DropdownProvider } from "./dropdown-context";
import DropdownDiv from "./DropdownDiv";

const Dropdown = ({ children, ...props }) => {


  return (
    <DropdownProvider {...props}>
      <DropdownDiv className="dropdown-list">{children}</DropdownDiv>
    </DropdownProvider>
  );
};

export default Dropdown;
