import React from 'react';
import styled, { css } from 'styled-components/macro';
import { hot } from 'react-hot-loader';
import Board from './components/Board/_Board';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h2>Simple Trello</h2>
      <Board id={0}></Board>
    </div>
  );
};

export default hot(module)(App);
