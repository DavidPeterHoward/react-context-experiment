import React from "react";
import styled, { css } from "styled-components/macro";
import { hot } from "react-hot-loader";
import BoardContainer from "./components/Board/BoardContainer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h2>Simple Trello</h2>
      <BoardContainer></BoardContainer>
    </div>
  );
};

// export default hot(module)(App);
export default hot(module)(App);
