import React from "react";
import styled from "styled-components";
import { useDropdown } from "./dropdown-context";
const SearchDiv = styled.div`
  padding: 8px;
  .input-search {
    padding: 16px;
    outline: none;
    width: 100%;
    border: 1px solid black;
    border-radius: 12px;
  }
`;
const Search = ({ placeholder, ...props }) => {
  const { onChange } = useDropdown();
  return (
    <SearchDiv>
      <input
        type="text"
        placeholder={placeholder}
        className="input-search"
        onChange={onChange}
        {...props}
      />
    </SearchDiv>
  );
};

export default Search;
