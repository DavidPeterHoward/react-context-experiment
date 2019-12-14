import React, { useRef } from 'react';
import styled, { css } from 'styled-components/macro';

const AddToListContainer = styled.div``;

const AddToList = styled.div`
  display: flex;
  width: 100%;
`;

const AddToListButton = styled.button`
  width: 40%;
  height: 30px;
`;

const AddToListInput = styled.input`
  width: 100%;
  height: 30px;
`;

const AddToListComponent = props => {
  const { boardId, listId, HandleCardAction } = props;
  const inputRef = useRef(null);

  return (
    <AddToListContainer>
      <AddToList>
        <AddToListInput ref={inputRef} placeholder={'Add To List'} />
        <AddToListButton
          onClick={
            (listId,
            boardId,
            inputRef,
            e =>
              HandleCardAction(
                'ADD_CARD',
                listId,
                boardId,
                inputRef,
                e,
              ))
          }
        >
          Add
        </AddToListButton>
      </AddToList>
    </AddToListContainer>
  );
};

export default AddToListComponent;
