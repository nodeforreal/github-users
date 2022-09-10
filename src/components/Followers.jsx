import React from "react";
import styled from "styled-components";
import { GithubContext } from "../context/GithubContext";

const Followers = () => {
  const { followers } = React.useContext(GithubContext);
  return (
    <Wrapper>
      <div className="followers">
        {followers.map((follower) => {
          const {id, avatar_url, login, html_url } = follower;
          return (
            <article key={id}>
              <img src={avatar_url} alt="profile" />
              <div>
                <p>{login}</p>
                <a href={html_url}>{html_url}</a>
              </div>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 1rem;
  background-color: var(--clr-white);
  border-radius: var(--radius);
  position: relative;

  &::before {
    content: "Followers";
    padding: 0.25rem 0.5rem 0.6rem;
    border-radius: 0.25rem 0.25rem 0 0;
    background-color: var(--clr-white);

    font-size: 1.2rem;
    position: absolute;
    left: 0;
    top: 0;
    transform: translateY(-90%);
  }

  .followers {
    height: 260px;
    overflow-y: auto;
    article {
      margin-bottom: 1.3rem;
      display: flex;
      align-items: center;
      column-gap: 1rem;
      img {
        width: 4rem;
        border-radius: 50%;
      }

      p {
        margin-bottom: 0.25rem;
        color: var(--clr-grey-2);
        font-size: 1rem;
        font-weight: 700;

      }
      a{
        color: var(--clr-grey-5);
      }
    }
  }
`;

export default Followers;
