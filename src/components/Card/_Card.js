import React from 'react';
import styled, { css } from 'styled-components/macro';

const Card = styled.div`
  border: 1px solid blue;
  min-height: 80px;
  padding: 1em;
  margin: 1em;
  position: relative;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 25px;
  height: 25px;
`;

const CardComponent = props => {
  const {
    id,
    title,
    content,
    HandleCardAction,
    boardId,
    listId,
  } = props;
  return (
    <Card id={id}>
      <DeleteButton
        onClick={
          (listId,
          boardId,
          id,
          e =>
            HandleCardAction('DELETE_CARD', listId, boardId, id, e))
        }
      >
        X
      </DeleteButton>
      {title}
      <br />
      {content}
    </Card>
  );
};

export default CardComponent;
