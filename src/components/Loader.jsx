import React from "react";
import styled from "styled-components/macro";

const Loader = ({css}) => {
  return (
    <section className="section-center">
      <Wrapper css={css}>
        <Spinner />
      </Wrapper>
    </section>
  );
};

const Spinner = styled.div`
  width: 20vmin;
  height: 20vmin;
  border-radius: 50%;
  border: 3.4px solid var(--clr-grey-8);
  border-top-color:var(--clr-primary-7);
 
  animation-name: spinner;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  @keyframes spinner {
    to{
      transform: rotate(360deg);
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
`;
export default Loader;
