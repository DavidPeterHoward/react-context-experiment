import React, { useState } from 'react';
import styled, { css } from 'styled-components/macro';
import { Card, DeleteButton } from './_Card.styled';

const CardComponent = props => {
  const {
    // data
    id,
    title,
    content,
    // data identifiers
    boardId,
    listId,
    // actions
    HandleCardData,
    HandleCardAction,
    // handlers
    HandlePointerDown,
    HandlePointerUp,
    HandlePointerMove,
    HandleOnClick,
  } = props;

  const HandleCardDelete = e =>
    HandleCardAction('DELETE_CARD', listId, boardId, id, e);
  /*         onClick={ (listId, boardId, id, e => HandleCardAction('DELETE_CARD', listId, boardId, id, e)) */

  const HandleCardMove = e => HandlePointerUp(e);

  return (
    <Card
      id={id}
      className={'card'}
      onClick={HandleOnClick}
      onPointerDown={HandlePointerDown}
      onPointerUp={HandleCardMove}
      onPointerMove={HandlePointerMove}
      onPointerCancel={HandlePointerUp}
    >
      <DeleteButton onClick={HandleCardDelete}>X</DeleteButton>
      {title}
      <br />
      {content}
    </Card>
  );
};

export default CardComponent;
