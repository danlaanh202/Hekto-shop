import React, { useCallback, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MenuIcon, SearchIcon } from "../../icons";
import { mobile } from "../../responsive";
import MobileModal from "./MobileModal";
import { navLink } from "./path";
import debounce from "lodash.debounce";
import { useGetData } from "../../hooks/useGetData";
import { useEffect } from "react";
import axios from "axios";
import { useClickOutside } from "../../hooks/useClickOutside";

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
      position: relative;
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
      &-drop {
        z-index: 10000;
        position: absolute;
        background: white;
        right: 0;
        left: 0;
        top: 100%;
        
        &-item {
          height: 90px;
          display: flex;
          align-items: center;
          padding: 10px 5px;
          width: 100%;
          gap: 20px;
          border-bottom: 1px solid ${(props) => props.theme.grayBorder};
          position: relative;
          .nothing {
            font-size: 18px;
            line-height: 1.1;
            color: ${(props) => props.theme.pinkSecondary};
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
          .spinner {
            width: 40px;
            height: 40px;
            border: 2px solid black;
            border-right: 2px solid transparent;
            margin-left: auto;
            margin-right: auto;
          }
          .img-container {
            height: 100%;
            img {
              object-fit: cover;
              height: 100%;
            }
          }
          .content-container {
            display: flex;
            flex-direction: column;
            gap: 8px;
            .content-title {
              font-size: 16px;
              line-height: 1.1;
              color: ${(props) => props.theme.purpleHeading};
            }
            .content-price {
              font-size: 14px;
              line-height: 1.1;
              color: ${(props) => props.theme.latestTypes};
            }
          }
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
  const [searchData, setSearchData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);
  const { show, setShow, nodeRef } = useClickOutside();
const navigate = useNavigate()
  const handleChangeInput = (e) => {
    setSearchInput(e.target.value);
  };
  const debounceChange = useCallback(debounce(handleChangeInput, 500), []);
  useEffect(() => {
    const getData = async () => {
      try {
        searchInput ? await axios
        .get(
          `${process.env.REACT_APP_API_URL}/search/get-search-products?search=${searchInput}&limit=4`
        )
        .then((response) => {
          setSearchData(response.data);
        }): setSearchData([])
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getData();
    console.log(searchData);
  }, [searchInput]);

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
          <div className="nav-search" ref={nodeRef}>
            <input
              onClick={() => setShow(true)}
              onChange={(e) => {
                setLoading(true);
                debounceChange(e);
              }}
              type="text"
            />
            <button className="">
              <SearchIcon></SearchIcon>
            </button>
            {show && <div className="nav-search-drop">
              {loading && (
                <div className="nav-search-drop-item">
                  <div className="spinner animate-spin"></div>
                </div>
              )}
              {
                !loading &&
                searchData &&
                searchData.map((item, index) => (
                  <div key={item._id}  className="nav-search-drop-item cursor-pointer" onClick={() => {setShow(false); navigate(`/products/${item._id}`)} }>
                    <div className="img-container">
                      <img src={item.productImage} alt="" />
                    </div>
                    <div className="content-container">
                      <div className="content-title">{item.productName}</div>
                      <div className="content-price">
                        ${item.price.toFixed(2)}
                      </div>
                    </div>
                  </div>
                ))}
              {!loading && searchData?.length === 0 && (
                <div className="nav-search-drop-item">
                  <div className="nothing">Nothing show</div>
                </div>
              )}
            </div>}
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
