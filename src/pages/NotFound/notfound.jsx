import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFoundPage = () => {
  const NotFound = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(https://miro.medium.com/v2/resize:fit:1400/1*DeBkx8vjbumpCO-ZkPE9Cw.png);
  `;

  const NotFoundButton = styled.button`
    position: absolute;
    top: 80%;
    left: 58%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    &:hover {
      background-color: #f2f2f2;
    }
    a {
      color: #000;
      text-decoration: none;
    }
  `;

  return (
    <NotFound>
      <NotFoundButton>
        <Link to="/">Home</Link>
      </NotFoundButton>
    </NotFound>
  );
};

export default NotFoundPage;
