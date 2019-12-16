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
  /*   const ifListsMatch = (boardList, actionList ) => {
    return boardList === actionList
  } */

  const helper = () => {
    //
  };

  switch (action.type) {
    case 'ADD_CARD':
      var boardById = boards[action.boardId];
      boardById.list.map(el => {
        console.log(el.listId + ' : ' + action.listId);
        if (el.listId === action.listId) {
          // The new card object to add
          console.log('working?');
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
      console.log('are we here too?');
      var boardById = boards[action.boardId];
      const prevList = action.prevListId;
      /*       console.log(prevList);
      console.log(action.listId); */
      boardById.list.map(initialList => {
        /*         console.log('action.listId: ' + action.listId);
        console.log('list loop list: ' + initialList.listId); */
        /*         console.log('we need to cycle' + initialList.listId);
        console.log('we need to match' + action.listId); */
        if (initialList.listId === parseInt(action.listId)) {
          const ObjToPush = {
            cardId: initialList.cards.length + 1,
            cardTitle: action.title,
            cardContent: action.content,
          };
          return initialList.cards.push(ObjToPush);
        } else {
          return initialList;
        }
        /*         if (initialList.listId === parseInt(prevList)) {
          return initialList.cards.map(currentCard => {
            if (currentCard.cardId === action.cardId) {
              initialList.cards = initialList.cards.filter(
                currentEl => {
                  initialList.cards =
                    currentEl.cardId !== action.cardId;
                  return initialList.cards;
                },
              );
            }
          });
        } */
      });
      return { ...boards };
    case 'REORDER_CARD':
      return { ...boards };
    case 'EDIT_CARD':
      return boards;
    case 'DELETE_CARD':
      var boardById = boards[action.boardId];
      boardById.list.map(initialList => {
        if (initialList.listId === action.listId) {
          return initialList.cards.map(currentCard => {
            if (currentCard.cardId === action.cardId) {
              initialList.cards = initialList.cards.filter(
                currentEl => {
                  initialList.cards =
                    currentEl.cardId !== action.cardId;
                  return initialList.cards;
                },
              );
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
  // const [takeListCard, setTakeListCard] = useState({});
  const [currentCardData, setCurrentCardData] = useState(null);

  // const [takeListId, setTakeListId] = useState(null);
  const [newListId, setNewListId] = useState(null);
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

  /*   const listOnMouseOver = e => {
    console.log(e.target);
    console.log('board mouseover');
  }; */

  // gets the currentListID & currentCardID (to be moved)
  const sendListId = (
    currentListId,
    sentCardId,
    title,
    content,
    e,
  ) => {
    console.log(title);
    setCurrentCardData({
      id: sentCardId,
      title: title,
      content: content,
      listId: currentListId,
    });

    /*     setTakeListId(currentListId);
    setTakeListCard(sentCardId); */
  };

  const HandleDispatch = () => {
    if (currentCardData) {
      dispatch({
        type: 'MOVE_CARD',
        boardId: props.id,
        title: currentCardData.title,
        content: currentCardData.content,
        prevListId: currentCardData.listId,
        listId: newListId,
        cardId: currentCardData.id,
      });

      dispatch({
        type: 'DELETE_CARD',
        boardId: props.id,
        listId: currentCardData.listId,
        cardId: currentCardData.id,
      });
    }
    setCurrentCardData(null);
    /*     if (newListId !== currentCardData.listId) {


    } */
  };

  const HandleMoveCard = e => {
    var listId = e.currentTarget.dataset.listid;
    setNewListId(listId);
    if (currentCardData && listId !== currentCardData.listId) {
      HandleDispatch();
    }
  };

  return (
    <Board id="allLists">
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
            /*             listOnMouseOver={listOnMouseOver} */
            HandleMoveCard={HandleMoveCard}
            sendListId={sendListId}
          />
        );
      })}
    </Board>
  );
};

export default BoardComponent;
