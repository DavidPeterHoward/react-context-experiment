import React, { useState } from 'react';
import styled, { css } from 'styled-components/macro';
import AddToList from './AddToList/_AddToList';
import Card from './../Card/_Card';

const ListContainer = styled.div`
  width: 300px;
  height: 100%;
  min-height: 300px;
  border: 1px solid black;
  margin: 1em;
  padding: 1em;
  &:hover {
    background: salmon;
  }
  /* position: relative; */
`;

const List = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid grey;
  /* position: relative; */
`;

const ListTitle = styled.h3``;

const ListComponent = props => {
  const {
    id,
    title,
    cards,
    boardId,
    HandleCardAction,
    listOnMouseOver,
    HandleMoveCard,
    sendListId,
  } = props;
  const [currentList, setCurrentList] = useState(id);

  /*   const onMouseOver = e => {
    // console.log('list event: ' + e.currentTarget.dataset.listid);
    setCurrentList(e.currentTarget.dataset.listid);
  };
 */
  var Finder = document.getElementById('allLists');

  /*   Finder.addEventListener('mouseenter', function(e) {
    console.log(e.target);
  }); */

  const HandleEvents = e => {
    // console.log(e.currentTarget);
    /*     Combine(e.currentTarget); */
  };

  /*   const Combine = (sentList, cardEvent, listEvent) => {
    console.log('sentList event: ' + sentList);
    console.log('card event: ' + cardEvent);
    console.log('list event: ' + listEvent);
  }; */
  const onMouseOver = e => {
    // console.log('card event: ' + e.currentTarget.dataset.listid);
    console.group('over');
    console.dir(e.target);
    /*     console.dir('currentTarget: ' + e.currentTarget);
    console.dir('relatedTarget: ' + e.relatedTarget); */
    console.groupEnd();
  };
  const onMouseOut = e => {
    // console.log('card event: ' + e.currentTarget.dataset.listid);
    console.group('out');
    console.dir(e.currentTarget);
    /*     console.dir('Outtarget: ' + e.target);
    console.dir('OutcurrentTarget: ' + e.currentTarget); */
    console.dir(e.relatedTarget);
    console.groupEnd();
  };

  return (
    <ListContainer
      key={id}
      data-listid={id}
      className={'list'}
      // onDragEnter={e => console.log('drag enter list: ' + e.target)}
      onMouseEnter={HandleMoveCard}
      /*       onMouseOver={e => onMouseOver(e)}
      onMouseOut={e => onMouseOut(e)} */
      // onMouseOver={e => onMouseOver(e)}
      /*       onMouseOver={listOnMouseOver} */
      /*       onPointerMove={e => onMouseOver(e)} */
    >
      <ListTitle>{title}</ListTitle>
      <AddToList
        boardId={boardId}
        listId={id}
        HandleCardAction={HandleCardAction}
      ></AddToList>
      <List>
        {cards.map(card => {
          const { cardId, cardTitle, cardContent } = card;
          return (
            <Card
              /*               onMouseDown={e => console.log(e.target)} */
              key={cardId + cardTitle}
              id={cardId}
              title={cardTitle}
              content={cardContent}
              HandleCardAction={HandleCardAction}
              boardId={boardId}
              listId={id}
              currentHover={currentList}
              sendListId={sendListId}
              listOnMouseOver={listOnMouseOver}
            />
          );
        })}
      </List>
    </ListContainer>
  );
};

export default ListComponent;
