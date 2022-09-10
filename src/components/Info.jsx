import React from "react";
import styled from "styled-components";
import { GithubContext } from "../context/GithubContext";
import { GoRepo, GoGist } from "react-icons/go";
import { FiUser, FiUserPlus } from "react-icons/fi";

const Info = () => {
  const { user } = React.useContext(GithubContext);
  const { public_repos, public_gists, followers, following } = user
  const info = [
    {
      id: 1,
      icon: <GoRepo className="icon" />,
      label: "repos",
      value: public_repos,
      color: "pink",
    },
    {
      id: 2,
      icon: <FiUser className="icon" />,
      label: "followers",
      value: followers,
      color: "green",
    },
    {
      id: 3,
      icon: <FiUserPlus className="icon" />,
      label: "following",
      value: following,
      color: "purple",
    },
    {
      id: 4,
      icon: <GoGist className="icon" />,
      label: "gists",
      value: public_gists,
      color: "yellow",
    },
  ];

  return (
    <section className="section section-center">
      <Wrapper>
        {info.map(({ id, icon, label, value, color }) => {
          return (
            <ItemWrapper key={id}>
              <span className={color}>{icon}</span>
              <div>
                <h3>{value}</h3>
                <p>{label}</p>
              </div>
            </ItemWrapper>
          );
        })}
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const ItemWrapper = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1.5rem;
  background-color: var(--clr-white);

  span{
    width: 3rem;
    height: 3rem;
    display: grid;
    flex-shrink: 0;
    place-content: center;
    border-radius: 50%;
    background-color: brown;
  }

  .icon {
    width: 1.3rem;
  }

  h3 {
    margin: 0;
    font-size: 1.5rem;
  }

  p {
    font-size: 1.2rem;
    margin: 0;
    text-transform: capitalize;
  }

  .pink{
    background-color: hsl(320, 40%, 86%);
    color: hsl(320, 60%, 66%);
  }

  .green{
    background-color: hsl(128, 40%, 86%);
    color: hsl(128, 60%, 66%);
  }

  .purple{
    background-color: hsl(220, 40%, 86%);
    color: hsl(220, 60%, 66%);
  }

  .yellow{
    background-color: hsl(50, 40%, 86%);
    color: hsl(50, 60%, 66%);
  }
`;
export default Info;
