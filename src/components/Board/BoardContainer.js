import React, { useState, useReducer } from 'react';
import BoardComponent from './_Board';
import MockData from '../_Data/MockData';
import CardReducer from '../_Reducers/CardReducer';

export const BoardContainer = props => {
  const [cards, dispatch] = useReducer(CardReducer, MockData);
  const [boardData, setBoardData] = useState(MockData);
  const [currentCardData, setCurrentCardData] = useState(null);
  const [newListId, setNewListId] = useState(null);

  const BOARD_ID = 0;

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

  const HandleMoveCard = e => {
    var listId = e.currentTarget.dataset.listid;
    setNewListId(listId);
    if (currentCardData && listId !== currentCardData.listId) {
      HandleDispatch();
    }
  };

  const HandleCardData = (
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
  };

  return (
    <BoardComponent
      id={0}
      data={boardData}
      HandleCardAction={HandleCardAction}
      HandleCardData={HandleCardData}
    />
  );
};

export default BoardContainer;
