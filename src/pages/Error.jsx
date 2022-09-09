import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Wrapper>
      <h1>404</h1>
      <h2>Sorry, The Page You Tried Cannot Be Found.</h2>
      <Button to="/" className="btn">
        Back Home
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100vh;
  display: grid;
  place-content: center;
  row-gap: 24px;

  h1 {
    text-align: center;
    font-size: 90px;
    font-weight: 700;
  }

  h2 {
    text-align: center;
  }
`;

const Button = styled(Link)`
  width: fit-content;
  margin: 0 auto;
`;

export default Error;
