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

const pullAtIndex = (arr, pullArr) => {
  let removed = [];
  let pulled = arr
    .map((v, i) => (pullArr.includes(i) ? removed.push(v) : v))
    .filter((v, i) => !pullArr.includes(i));
  arr.length = 0;
  pulled.forEach(v => arr.push(v));
  return removed;
};

const cardReducer = (boards, action) => {
  /*   const ifListsMatch = (boardList, actionList ) => {
    return boardList === actionList
  } */

  switch (action.type) {
    case 'ADD_CARD':
      var boardById = boards[action.boardId];
      boardById.list.map(el => {
        if (el.listId === action.listId) {
          // The new card object to add
          const ObjToPush = {
            cardId: el.cards.length + 1,
            cardTitle: action.title,
            cardContent: 'nada!',
          };
          return el.cards.push(ObjToPush);
        } else {
          return el;
        }
      });
      return { ...boards };
    case 'MOVE_CARD':
      /*if(currentPos !== targetPos) {
        // (1) -> remove card from previous list (currentPos)
        // (2) -> add card to new list (targetPos)
      }*/
      return boards;
    case 'EDIT_CARD':
      return boards;
    case 'DELETE_CARD':
      var boardById = boards[action.boardId];
      boardById.list.map(el => {
        if (el.listId === action.listId) {
          return el.cards.map(card => {
            if (card.cardId === action.cardId) {
              el.cards = el.cards.filter(ca => {
                el.cards = ca.cardId !== action.cardId;
                return el.cards;
              });
            }
          });
        }
      });
      return { ...boards };

    default:
      return boards;
  }
};

const BoardComponent = props => {
  const [boardData, setBoardData] = useState(MockData);

  const [cards, dispatch] = useReducer(cardReducer, MockData);
  // AddCardToList
  const HandleCardAction = (action, listId, boardId, inputRef, e) => {
    // todo: modularize to a single 'HandleCardChange'
    if (action === 'ADD_CARD') {
      const inputTitle = inputRef.current.value;

      dispatch({
        type: action,
        boardId: boardId,
        listId: listId,
        title: inputTitle,
      });
    }
    if (action === 'DELETE_CARD') {
      dispatch({
        type: action,
        boardId: boardId,
        listId: listId,
        cardId: inputRef,
      });
    }
  };

  return (
    <Board>
      {/* todo: change props.id to a real id */}
      {boardData[props.id].list.map(list => {
        const { listId, listTitle, cards } = list;
        return (
          <List
            key={listId}
            id={listId}
            title={listTitle}
            cards={cards}
            boardId={props.id}
            HandleCardAction={HandleCardAction}
          />
        );
      })}
    </Board>
  );
};

export default BoardComponent;
