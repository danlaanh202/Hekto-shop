import React from "react";
import styled from "styled-components";
import { useDropdown } from "./dropdown-context";
const ListDiv = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  background: white;
  border: 1px solid rgb(229, 231, 235);

  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;
const List = ({ children }) => {
  const { show } = useDropdown();
  return (
    <ListDiv>
      {show && <div className="shadow-sm top-full">{children}</div>}
    </ListDiv>
  );
};

export default List;
