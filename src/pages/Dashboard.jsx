import React from "react";
import styled from "styled-components";
import { NavBar, Info, Repos, Search, UserInfo, Loader } from "../components";
import { GithubContext } from "../context/GithubContext";

const Dashboard = () => {
  const { isLoading } = React.useContext(GithubContext);
  if (isLoading) {
    return (
      <>
        <NavBar />
        <Search />
        <Loader />
      </>
    );
  }

  return (
    <Wrapper>
      <NavBar />
      <Search />
      <Info />
      <UserInfo />
      <Repos />
    </Wrapper>
  );
};

const Wrapper = styled.section``;
export default Dashboard;
