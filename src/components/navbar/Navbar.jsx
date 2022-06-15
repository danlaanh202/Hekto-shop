import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { MenuIcon, SearchIcon } from "../../icons";
import { mobile } from "../../responsive";
import MobileModal from "./MobileModal";
import { navLink } from "./path";
const NavbarStyles = styled.div`
  width: 100%;
  /* overflow: hidden; */
  .container {
    padding: 20px 5px;
    display: flex;
    align-items: center;
    ${mobile({
      width: "100vw",
    })}
    .menu-icon {
      display: none;

      width: 24px;
      height: 24px;
      svg {
        color: ${(props) => props.theme.purpleHeader};
      }
      ${mobile({
        display: "block",
        marginRight: "8px",
      })};
    }
  }
  .logo {
    font-size: 34px;
    line-height: 1.15;
    color: #0d0e43;
    margin-right: 40px;
    font-weight: bold;
    ${mobile({
      fontSize: "20px",
      marginLeft: "10px",
    })}
  }
  .nav {
    display: flex;
    ${mobile({
      display: "none",
    })}
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
      ${mobile({
        marginRight: "20px",
      })}
      input {
        border: 2px solid #e7e6ef;
        padding: 10px;
        width: 300px;
        ${mobile({
          width: "150px",
          padding: "4px",
        })}
        &:focus {
          border: 2px solid rgb(59, 130, 246);
        }
      }
      button {
        padding: 6px 14px;
        border: none;
        cursor: pointer;

        background-color: ${(props) => props.theme.pinkSecondary};
        ${mobile({
          padding: "4px 10px",
        })}
        svg {
          ${mobile({
            width: "14px",
            height: "14px",
          })}
        }
      }
    }
  }
`;

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
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
          <div className="menu-icon">
            <MenuIcon onClick={() => setShowMenu(true)} />
          </div>
        </div>
      </NavbarStyles>
      <MobileModal setShowMenu={setShowMenu} showMenu={showMenu} />
    </>
  );
};

export default Navbar;
