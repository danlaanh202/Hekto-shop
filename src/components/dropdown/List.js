import React from "react";
import styled from "styled-components";
import { useDropdown } from "./dropdown-context";
const ListDiv = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  background: white;
  border: 1px solid rgb(229, 231, 235);
  z-index: 10;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  overflow-y: auto;
  .shadow-sm {
    height: ${props => props.length <= 5 ? `${props.length * 51}px` : `${4*51}px`};
  }
`;
const List = ({ children, length }) => {
  const { show } = useDropdown();
  return (
    <ListDiv length={length}>
      {show && <div className="shadow-sm">{children}</div>}
    </ListDiv>
  );
};

export default List;
