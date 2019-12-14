import React, { useState, useReducer } from 'react';
import styled, { css } from 'styled-components/macro';
import List from '../List/_List';
import MockData from './_mockData';

const Board = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  padding: 1em;
`;

const cardReducer = (boards, action) => {
  switch (action.type) {
    case 'ADD_CARD':
      // Initial filter to find the correct cards array
      const filter = boards[action.boardId].list.filter(
        el => el.listId === action.listId,
      )[0].cards;

      // Grab the length of the cards array to alter the ID-key of the card (make unique)
      const lengthOfCardArray = filter.length;

      // The new card object to add
      const ObjToPush = {
        cardId: lengthOfCardArray + 1,
        cardTitle: action.title,
        cardContent: 'nada!',
      };

      // push to the initial filter
      const newBoard = filter.push(ObjToPush);

      // return and merge previous state + new state
      return { ...boards, newBoard };

    case 'MOVE_CARD':
      /*if(currentPos !== targetPos) {
        // (1) -> remove card from previous list (currentPos)
        // (2) -> add card to new list (targetPos)
      }*/
      return boards;

    default:
      return boards;
  }
};

const BoardComponent = props => {
  const [boardData, setBoardData] = useState(MockData);

  const [cards, dispatch] = useReducer(cardReducer, boardData);

  const AddCardToList = (listId, boardId, inputRef, e) => {
    // todo: modularize to a single 'HandleCardChange'
    const inputTitle = inputRef.current.value;
    dispatch({
      type: 'ADD_CARD',
      boardId: boardId,
      listId: listId,
      title: inputTitle,
    });
  };

  return (
    <Board>
      {boardData[props.id].list.map(list => {
        const { listId, listTitle, cards } = list;
        return (
          <List
            key={listId}
            id={listId}
            title={listTitle}
            cards={cards}
            boardId={props.id}
            AddCardToList={AddCardToList}
          />
        );
      })}
    </Board>
  );
};

export default BoardComponent;
