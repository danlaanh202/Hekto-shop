import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  CartIcon,
  CloseIcon,
  CloseIconNonCircle,
  HeartIcon,
} from "../../icons";
import { mobile } from "../../responsive";
import { navLink } from "./path";
const MobileModalStyes = styled.div`
  display: none;
  position: fixed;
  inset: 0;
  background: #3d3d3d;
  z-index: 1000000;
  font-size: 14px;
  line-height: 1.5;
  .top-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    border-bottom: 2px solid white;
    .logo {
      color: white;
    }
    .close-icon {
      width: 24px;
      height: 24px;
      color: white;
      position: absolute;
      right: 10px;
      cursor: pointer;
    }
  }
  .nav-container {
    display: flex;
    flex-direction: column;
    /* margin: 10px 0; */
    border-bottom: 2px solid white;
    .nav-item {
      color: white;
      text-align: center;
      padding: 10px 0;

      .nav-text {
        border-bottom: 1px solid white;
      }
    }
  }
  .cart-container {
    .cart {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 10px 0;
      span {
        color: white;
      }
    }
  }
  .bottom-container {
    display: flex;
    &-item {
      color: white;
      padding: 10px 0;
      width: 50%;
      text-align: center;
      background: #ff4093;
      border: 1px solid white;
      font-size: 14px;
      font-weight: 500;
    }
  }
  ${mobile({
    display: "block",
  })}
`;
const MobileModal = ({ setShowMenu = () => {}, showMenu = false }) => {
  const setShowModalFalse = () => {
    setShowMenu(false);
  };
  return (
    <>
      {showMenu && (
        <MobileModalStyes>
          <div className="top-container">
            <span className="logo">Hekto</span>
            <CloseIconNonCircle
              className="close-icon"
              onClick={() => {
                setShowMenu(false);
              }}
            />
          </div>
          <div className="nav-container">
            {navLink.map((link, index) => (
              <NavLink
                onClick={setShowModalFalse}
                to={link.to}
                key={link.to}
                className="nav-item"
              >
                <span className="nav-text">{link.text}</span>
              </NavLink>
            ))}
          </div>
          <div className="cart-container">
            <Link onClick={setShowModalFalse} className="cart" to="/cart">
              <span>Cart</span>
              <CartIcon></CartIcon>
            </Link>
            <Link onClick={setShowModalFalse} className="cart" to="/cart">
              <span>WishList</span>
              <HeartIcon></HeartIcon>
            </Link>
          </div>
          <div className="bottom-container" onClick={setShowModalFalse}>
            <button className="bottom-container-item">Settings</button>
            <button className="bottom-container-item">Logout</button>
          </div>
        </MobileModalStyes>
      )}
    </>
  );
};

export default MobileModal;
