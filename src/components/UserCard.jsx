import React from "react";
import styled from "styled-components";
import { GithubContext } from "../context/GithubContext";
import { CgOrganisation } from "react-icons/cg";
import { GoLocation } from "react-icons/go";
import { AiOutlineLink } from "react-icons/ai";

const UserCard = () => {
  const { user } = React.useContext(GithubContext);
  const {
    avatar_url,
    name,
    twitter_username,
    html_url,
    bio,
    company,
    location,
    blog,
  } = user;
  return (
    <Wrapper>
      <div className="profile-section">
        <div className="profile">
          <img src={avatar_url} alt="profile" />
          <div>
            <h3>{name}</h3>
            <p>@{twitter_username || "ice-friend"}</p>
          </div>
        </div>
        <a href={html_url} className="follow-btn">
          Follow
        </a>
      </div>
      <p className="bio">{bio}</p>
      <div className="info">
        <CgOrganisation className="icon" />
        <p>{company}</p>
      </div>
      <div className="info">
        <GoLocation className="icon" />
        <p>{location}</p>
      </div>
      <div className="info site-link">
        <AiOutlineLink className="icon" />
        <a href={`https://${blog}`}>{blog}</a>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  * {
    margin: 0;
  }

  padding: 1rem;
  display: grid;
  background-color: var(--clr-white);
  border-radius: var(--radius);
  position: relative;

  &::before {
    content: "User";
    padding: 0.25rem 0.5rem 0.6rem;
    border-radius: 0.25rem 0.25rem 0 0;
    background-color: var(--clr-white);

    font-size: 1.2rem;
    position: absolute;
    left: 0;
    top: 0;
    transform: translateY(-90%);
  }

  .profile-section {
    display: flex;
    justify-content: space-between;
    column-gap: 1rem;

    .profile {
      display: flex;
      align-items: center;
      column-gap: 1rem;
    }

    img {
      width: 4rem;
      border-radius: 50%;
    }

    h3 {
      font-size: 1.2rem;
      margin-bottom: 0.25rem;
    }

    p {
      font-size: 1rem;
    }

    .follow-btn {
      background-color: transparent;
      color: hsl(190, 50%, 50%);
      border: solid 1px hsl(190, 50%, 50%);
      border-radius: 1.2rem;
      align-self: center;

      font-size: 1.2rem;
      padding: 0.25rem 1rem;
      transition: var(--transition);
      &:hover {
        background-color: hsl(190, 50%, 50%);
        color: white;
      }
    }
  }

  .bio {
    margin: 1rem 0 1rem 0;
    font-size: 1rem;
  }

  .info {
    display: flex;
    column-gap: 1rem;
    align-items: center;

    .icon {
      width: 1rem;
    }

    p {
      font-size: 1rem;
    }
  }

  .site-link {
    font-size: 1rem;
    a {
      color: var(--clr-primary-7);
    }
  }
`;
export default UserCard;
