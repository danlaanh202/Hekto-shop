import React from "react";
import styled from "styled-components";
import { useDropdown } from "./dropdown-context";
const SelectDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #e7ecf3;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  border-radius: 4px;
  cursor: pointer;
`;
const Select = ({ placeholder = "" }) => {
  const { show, handleToggleDropdown } = useDropdown();
  return (
    <SelectDiv onClick={handleToggleDropdown}>
      <span>{placeholder}</span>
      <span>
        {show ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </span>
    </SelectDiv>
  );
};

export default Select;
