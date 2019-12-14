import React from 'react';
import styled, { css } from 'styled-components/macro';
import { hot } from 'react-hot-loader';
import './App.css';

const TestStyled = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid black;
  padding: 1em;
  ${props =>
    props.someProp &&
    css`
      color: red;
    `}
`;

const App = () => {
  return (
    <div className="App">
      <TestStyled someProp>Hey!</TestStyled>
    </div>
  );
};

export default hot(module)(App);
