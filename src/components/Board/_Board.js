import React from 'react';
import styled, { css } from 'styled-components/macro';
import List from '../List/_List';

const Board = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  padding: 1em;
`;

const BoardComponent = () => {
  return (
    <Board>
      <List></List>
      <List></List>
      <List></List>
    </Board>
  );
};

export default BoardComponent;
