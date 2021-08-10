import React from 'react';
import styled from 'styled-components';
import "./Home.css";

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;
export const Home = (props) => (
  <GridWrapper className = "Home-header">
    <header>
     <h1>Workout Coach</h1> 
    </header>
    <body className ="Home-body">
    <p>What kind of workout would you like?</p>
    <p>How you're feeling</p>
    </body>
  </GridWrapper>
)