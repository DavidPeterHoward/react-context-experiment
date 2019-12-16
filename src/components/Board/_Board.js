import React, { useState, useReducer } from 'react';
import styled, { css } from 'styled-components/macro';
import List from '../List/_List';
import Board from './_Board.styled';

const BoardComponent = props => {
  const { id, data, HandleCardAction, HandleCardData } = props;
  return (
    <Board>
      {data[props.id].list.map(list => {
        const { listId, listTitle, cards } = list;
        return (
          <List
            key={listId}
            id={listId}
            title={listTitle}
            cards={cards}
            boardId={props.id}
            HandleCardAction={HandleCardAction}
            HandleCardData={HandleCardData}
          />
        );
      })}
    </Board>
  );
};

export default BoardComponent;
