import React from "react";
import styled from "styled-components";
//import Button from "components/atom/Button";
import SearchSection from "components/organism/SearchSection";
import Suggestion from "components/organism/Suggestion";

//React Components

const Home = styled.div`
  flex-grow: 1;
`;

export default function index() {
  return (
    <Home>
      <SearchSection></SearchSection>
      <Suggestion></Suggestion>
    </Home>
  );
}
