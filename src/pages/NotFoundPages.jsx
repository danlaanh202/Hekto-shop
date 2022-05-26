import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const NotFound = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 40px;
  h2 {
    margin-bottom: 40px;
  }
`;
const NotFoundPages = () => {
  return (
    <NotFound className="container">
      <h2>Page not found</h2>
      <Link to="/">Click back</Link>

      <img
        src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg?t=st=1653574163~exp=1653574763~hmac=1d10d3b1e935f2fad22a8e946f51dce66985fbb9d099b95e6da225666e9a3726&w=826"
        alt=""
        className="not-found-img"
      />
    </NotFound>
  );
};

export default NotFoundPages;
