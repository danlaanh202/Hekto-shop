import React from "react";

import styled from "styled-components";


import ListView from "../../icons/ListView";
import SolidView from "../../icons/SolidView";

import { mobile } from "../../responsive";
import CustomDropdown from "./CustomDropdown";
import debounce from 'lodash.debounce';
import { useCallback } from "react";

const FilterCatStyles = styled.div`
  margin: 124px 0;
  ${mobile({
    margin: "30px 0",
  })}
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "15px",
      justifyContent: "unset",
    })}
    .title {
      ${mobile({
        margin: "0 12px",
        width: "100%",
      })}
      h3 {
        font-size: 22px;
        line-height: 1.2;
        color: ${(props) => props.theme.filterTitle};
        ${mobile({
          fontSize: "16px",
        })}
      }
      .amount {
        font-family: "Lato";
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        margin-top: 8px;
        color: ${(props) => props.theme.graySubText};
      }
    }
    .right {
      display: flex;
      align-items: center;

      ${mobile({
        width: "100%",
        justifyContent: "space-around",
        margin: "0 4px",
      })}
      .sort-by {
        margin-right: 20px;
        .title {
          margin: 0;
        }
        ${mobile({
          marginRight: "8px",
        })}
      }
      .view-picker {
        display: flex;
        align-items: center;
        gap: 10px;
        margin: 0 30px;
        ${mobile({
          margin: "0 5px",
        })}
        span {
          cursor: pointer;
          padding: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .active {
          background: #ccc;
        }
      }
      .search-input {
        height: 30px;
        padding: 5px;
        outline: none;
        border: 1px solid ${(props) => props.theme.graySubText};
        ${mobile({
          height: "24px",
          width: "100px",
        })}
      }
    }
  }
`;

const FilterCat = ({ setView, view, showViewSelect = true, setSearchInput =() => {}, setLoading=() => {} }) => {
  const handleChangeInput = (e) => {
    setSearchInput(e.target.value)

  };
  const debounceChange = useCallback(debounce(handleChangeInput, 500),[])
  return (
    <FilterCatStyles>
      <div className="container">
        <div className="title">
          <h3>Ecommerce Acceories & Fashion item </h3>
          <div className="amount">About 9,620 results (0.62 seconds)</div>
        </div>
        <div className="right">
          <div className="sort-by">
            <CustomDropdown />
          </div>
          {showViewSelect && (
            <div className="view-picker">
              <span
                className={`${view === 0 ? "active" : ""}`}
                onClick={() => setView(0)}
              >
                <SolidView />
              </span>
              <span
                className={`${view === 1 ? "active" : ""}`}
                onClick={() => setView(1)}
              >
                <ListView />
              </span>
            </div>
          )}

          <input
            onChange={(e) => {
              setLoading(true)
              debounceChange(e)
            }}
            type="text"
            className="search-input"
          />
        </div>
      </div>
    </FilterCatStyles>
  );
};

export default FilterCat;
