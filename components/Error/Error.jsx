import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const MyComponent = () => {
  return <Title>OOPS! SOMETHING WENT WRONG</Title>;
};

export default MyComponent;
