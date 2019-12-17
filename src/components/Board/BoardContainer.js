import React, { useState, useReducer, useEffect } from 'react';
import BoardComponent from './_Board';
import MockData from '../_Data/MockData';
import CardReducer from '../_Reducers/CardReducer';

export const BoardContainer = props => {
  const [boardData, setBoardData] = useState(MockData);
  const [currentCardData, setCurrentCardData] = useState(null);
  const [newListId, setNewListId] = useState(null);
  const [cards, dispatch] = useReducer(CardReducer, MockData);

  const BOARD_ID = 0;

  useEffect(() => {
    if (currentCardData) {
      HandleMoveCard();
    } else {
    }
  }, [currentCardData]);

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
    if (action === 'ADD_LIST') {
      const inputTitle = inputRef.current.value;
      console.log('at dispatch');
      console.group();
      console.log(action);
      console.log(listId);
      console.log(boardId);
      console.log(inputRef);
      console.dir(e.target);
      console.groupEnd();
      dispatch({
        type: action,
        boardId: boardId,
        title: inputTitle,
      });
    }
  };
  const HandleDispatch = () => {
    if (currentCardData) {
      dispatch({
        type: 'MOVE_CARD',
        boardId: BOARD_ID,
        title: currentCardData.title,
        content: currentCardData.content,
        prevListId: currentCardData.listId,
        listId: newListId,
        cardId: currentCardData.id,
      });

      dispatch({
        type: 'DELETE_CARD',
        boardId: BOARD_ID,
        listId: currentCardData.listId,
        cardId: currentCardData.id,
      });
    }
    setCurrentCardData(null);
  };

  const HandleMoveCard = () => {
    if (newListId !== undefined && currentCardData !== null) {
      HandleDispatch();
    } else {
      console.warn('dispatch error');
    }
  };

  const HandleCardData = (
    nextListId,
    currentListId,
    sentCardId,
    title,
    content,
    e,
  ) => {
    setCurrentCardData({
      id: sentCardId,
      title: title,
      content: content,
      listId: currentListId,
    });
    setNewListId(nextListId);
  };

  return (
    <BoardComponent
      id={0}
      data={boardData}
      HandleCardAction={HandleCardAction}
      HandleMoveCard={HandleMoveCard}
      HandleCardData={HandleCardData}
    />
  );
};

export default BoardContainer;
