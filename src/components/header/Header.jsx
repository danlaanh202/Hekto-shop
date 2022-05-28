import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  CartIcon,
  DownIcon,
  EmailIcon,
  HeartIcon,
  LoginIcon,
  PhoneIcon,
} from "../../icons";
const HeaderStyles = styled.div`
  width: 100%;
  background: ${(props) => props.theme.purpleHeader};
  padding: 12px;
  .container {
    display: flex;
    justify-content: space-between;

    .list {
      display: flex;
      align-items: center;
      gap: 20px;
      &-content {
        color: #f1f1f1;
        display: flex;
        align-items: center;
      }
    }
  }
`;
const ListItem = styled.span`
  font-size: 16px;
  line-height: 18.75px;
  color: white;
  display: flex;
  gap: 4px;
  font-weight: 600;
  .link-navigate {
    display: flex;
    gap: 4px;
  }
`;

const Header = () => {
  return (
    <HeaderStyles>
      <div className="container">
        <div className="list">
          <ListItem>
            <EmailIcon></EmailIcon>
            <span className="list-content">mushroomlazy259@gmail.com</span>
          </ListItem>
          <ListItem>
            <PhoneIcon></PhoneIcon>
            <span className="list-content">(12345)67890</span>
          </ListItem>
        </div>
        <div className="list">
          <ListItem>
            <span className="list-content">English</span>
            <DownIcon></DownIcon>
          </ListItem>
          <ListItem>
            <span className="list-content">USD</span> <DownIcon></DownIcon>
          </ListItem>
          <ListItem>
            <Link className="link-navigate" to="/login">
              <span className="list-content">Login</span>
              <LoginIcon></LoginIcon>
            </Link>
          </ListItem>
          <ListItem>
            <span className="list-content">Wishlist</span>
            <HeartIcon></HeartIcon>
          </ListItem>
          <ListItem>
            <Link to="/cart">
              <CartIcon></CartIcon>
            </Link>
          </ListItem>
        </div>
      </div>
    </HeaderStyles>
  );
};

export default Header;
