import React from "react";
import styled from "styled-components";
import loginSvg from "../images/login-img.svg";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Wrapper>
      <img src={loginSvg} alt="" />
      <h1>Github User</h1>
      <Button className="btn" onClick={loginWithRedirect}>
        LOG IN / SIGN UP
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  max-width: 558px;
  min-width: 358px;
  height: 100vh;
  margin: 0 auto;
  display: grid;
  place-content: center;
  row-gap: 24px;

  h1 {
    font-size: 42px;
    text-align: center;
  }

  img {
    width: 100%;
  }
`;

const Button = styled.button`
  width: fit-content;
  margin: 0 auto;
`;

export default Login;
