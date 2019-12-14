import React from 'react';
import styled, { css } from 'styled-components/macro';
import List from '../List/_List';
// import MockData from './_mockData';

const MockData = [
  {
    boardId: 0,
    boardTitle: 'First Board',
    list: [
      {
        listId: 1,
        listTitle: 'First List',
        cards: [
          {
            cardId: 1,
            cardTitle: 'First Card',
            cardContent: 'Some Content In Card',
          },
        ],
      },
      {
        listId: 2,
        listTitle: 'Second List',
        cards: [
          {
            cardId: 1,
            cardTitle: 'First card',
            cardContent: 'Some Content In card',
          },
        ],
      },
      {
        listId: 3,
        listTitle: 'Third List',
        cards: [
          {
            cardId: 1,
            cardTitle: 'First card',
            cardContent: 'Some Content In card',
          },
        ],
      },
    ],
  },
];

const Board = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  padding: 1em;
`;

const BoardComponent = props => {
  return (
    <Board>
      {MockData[props.id].list.map(list => {
        const { listId, listTitle, cards } = list;
        return (
          <List
            key={listId}
            id={listId}
            title={listTitle}
            cards={cards}
          ></List>
        );
      })}
    </Board>
  );
};

export default BoardComponent;
