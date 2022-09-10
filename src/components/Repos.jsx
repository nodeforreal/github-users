import React from "react";
import styled from "styled-components";
import { Languages, MostStared, StarsPerLanguage, MostForked } from "./Charts";

const Repos = () => {
  return (
    <section className="section section-center">
      <Wrapper>
        <Languages className="chart" />
        <MostStared className="chart" />
        <StarsPerLanguage className="chart" />
        <MostForked className="chart" />
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.section`
  margin-bottom: 3rem;
  width: 100%;
  display: grid;
  gap: 1.3rem;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 390px);

  @media screen and (min-width: 960px) {
    grid-template-rows: repeat(2, 390px);
    grid-template-columns: 40% 60%;
  }

  div {
    width: 100% !important;
    border-radius: var(--radius);
  }
`;
export default Repos;
