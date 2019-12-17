import React, { useState } from 'react';
import styled, { css } from 'styled-components/macro';
import AddToList from './AddToList/_AddToList';
// import Card from './../Card/_Card';
import CardContainer from './../Card/CardContainer';

import { ListContainer, List, ListTitle } from './_List.styled.js';

const ListComponent = props => {
  const {
    // data
    id,
    title,
    cards,
    // data identifiers
    boardId,
    // actions
    HandleCardAction,
    HandleCardData,
    HandleMoveCard,
  } = props;

  return (
    <ListContainer key={id} data-listid={id} className={'list'}>
      <ListTitle>{title}</ListTitle>
      <AddToList
        boardId={boardId}
        listId={id}
        HandleCardAction={HandleCardAction}
      ></AddToList>
      <List>
        {cards.map(SingleCard => {
          const { cardId, cardTitle, cardContent } = SingleCard;
          return (
            <CardContainer
              key={cardId + cardTitle}
              id={cardId}
              title={cardTitle}
              content={cardContent}
              boardId={boardId}
              listId={id}
              HandleCardAction={HandleCardAction}
              HandleMoveCard={HandleMoveCard}
              HandleCardData={HandleCardData}
            />
          );
        })}
      </List>
    </ListContainer>
  );
};

export default ListComponent;
