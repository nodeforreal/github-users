import React from "react";
import styled from "styled-components";
import Followers from "./Followers";
import UserCard from "./UserCard";

const UserInfo = () => {
  return (
    <section className="section section-center">
      <Wrapper>
        <UserCard />
        <Followers />
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap:3.3rem 1.2rem;

  @media screen and (min-width:968px){
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default UserInfo;
