import React from 'react';
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
  position: relative;
`;

const List = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid grey;
  position: relative;
`;

const ListTitle = styled.h3``;

const ListComponent = props => {
  const { id, title, cards, boardId, AddCardToList } = props;

  return (
    <ListContainer key={id}>
      <ListTitle>{title}</ListTitle>
      <AddToList
        boardId={boardId}
        listId={id}
        AddCardToList={AddCardToList}
      ></AddToList>
      <List>
        {cards.map(card => {
          const { cardId, cardTitle, cardContent } = card;
          return (
            <Card
              key={cardId + cardTitle}
              id={cardId}
              title={cardTitle}
              content={cardContent}
            />
          );
        })}
      </List>
    </ListContainer>
  );
};

export default ListComponent;
