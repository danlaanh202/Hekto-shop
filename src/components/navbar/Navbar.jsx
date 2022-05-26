import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { DownIcon, SearchIcon } from "../../icons";
import { navLink } from "./path";
const NavbarStyles = styled.div`
  width: 100%;
  .container {
    padding: 20px 5px;
    display: flex;
    align-items: center;
  }
  .logo {
    font-size: 34px;
    line-height: 1.15;
    color: #0d0e43;
    margin-right: 80px;
    font-weight: bold;
  }
  .nav {
    display: flex;

    &-list {
      display: flex;
      gap: 35px;
      font-family: "Lato";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
    }
    &-item {
      color: ${(props) => props.theme.navItemColor};
    }
    .active {
      color: #fb2e86;
    }
    &-search {
      margin-left: auto;
      display: flex;
      align-items: center;
      input {
        border: 2px solid #e7e6ef;
        padding: 10px;
        width: 300px;
        &:focus {
          border: 2px solid rgb(59, 130, 246);
        }
      }
      button {
        padding: 6px 14px;
        border: none;
        cursor: pointer;
        background-color: ${(props) => props.theme.pinkSecondary};
      }
    }
  }
`;

const Navbar = () => {
  return (
    <NavbarStyles>
      <div className="container">
        <Link to="/" className="logo">
          Hekto
        </Link>
        <div className="nav">
          <div className="nav-list">
            {navLink.map((link) => (
              <NavLink to={link.to} key={link.to} className="nav-item">
                {link.text}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="nav-search">
          <input type="text" />
          <button className="">
            <SearchIcon></SearchIcon>
          </button>
        </div>
      </div>
    </NavbarStyles>
  );
};

export default Navbar;
