import React, { useState, useReducer } from 'react';
import styled, { css } from 'styled-components/macro';
import List from '../List/_List';
import AddNewList from './AddNewList/_AddNewList';
import Board from './_Board.styled';

const BoardComponent = props => {
  const { id, data, HandleCardAction, HandleCardData } = props;

  // var someData = data;
  //
  // console.log(someData);

  // console.log(data[0].map(el => console.log(el)));
  return (
    <Board>
      {data[id].list.map(list => {
        const { listId, listTitle, cards } = list;
        return (
          <List
            key={listId}
            id={listId}
            title={listTitle}
            cards={cards}
            boardId={id}
            HandleCardAction={HandleCardAction}
            HandleCardData={HandleCardData}
          />
        );
      })}
      <AddNewList
        boardId={id}
        HandleCardAction={HandleCardAction}
      ></AddNewList>
    </Board>
  );
};

export default BoardComponent;
