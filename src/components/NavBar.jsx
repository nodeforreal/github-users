import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const { logout, user } = useAuth0();

  return (
    <Wrapper>
      <img
        src={user.picture}
        alt="profile"
      />
      <span>
        welcome, <strong>{ user.nickname}</strong>
      </span>
      <button onClick={() => logout()}>Logout</button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 1.2rem;
  background-color: var(--clr-white);

  img {
    width: 50px;
    border-radius: 50%;
    align-self: center;
  }

  span {
    display: flex;
    align-items: center;
    column-gap: 0.2rem;
    text-transform: capitalize;

    strong {
      text-transform: uppercase;
    }
  }

  button {
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--clr-grey-6);
    letter-spacing: var(--spacing);
    border: 0;
    outline: none;
    background-color: transparent;
    cursor: pointer;
  }
`;
export default NavBar;
