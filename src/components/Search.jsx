import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { GithubContext } from "../context/GithubContext";

const Search = () => {
  const { fetchData, rateLimit, toggleError, isLoading, setToggleError } = React.useContext(GithubContext);
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query === "") {
      setToggleError("Field must be provided.");
      return;
    }
    // empty error toggle
    setToggleError("");
    fetchData(query);
  };

  return (
    <section className="section section-center">
      <Wrapper toggleError={toggleError}>
        <form className="search-section" onSubmit={handleSubmit}>
          <AiOutlineSearch className="icon" />
          <input
            type="text"
            onChange={(e) => setQuery(e.currentTarget.value)}
          />
          {!isLoading && (
            <button className="btn" type="submit">
              Search
            </button>
          )}
        </form>
       <h3>Requests : {rateLimit.remaining}/{rateLimit.limit}</h3>
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  * {
    margin: 0;
  }

  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  gap: 1.3rem;

  @media screen and (min-width: 680px) {
    grid-template-columns: 1fr auto;
  }
  &::before {
    content: "${({ toggleError }) => toggleError}";
    position: absolute;
    left: 0;
    top: 0;
    transform: translateY(100%);

    font-size: 1.2rem;
    color: hsl(0, 60%, 60%);
  }
  .search-section {
    background-color: var(--clr-white);
    padding: 0.5rem;
    border-radius: var(--radius);
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 1.3rem;

    .icon {
      width: 1.6rem;
      height: 1.6rem;
      margin-left: 0.5rem;
    }

    input {
      height: 100%;
      padding: 0.3rem;
      font-size: 1.2rem;
      outline: none;
      border: 1.3px solid var(--clr-grey-10);
      border-radius: var(--radius);
    }

    button {
      font-weight: 700;
      transition: all 0.1s linear;
    }
  }

  h3 {
    color: var(--clr-grey-3);
  }
`;

export default Search;
