import React, { useRef } from 'react';
import styled, { css } from 'styled-components/macro';

const AddNewListContainer = styled.div``;

const AddNewList = styled.div`
  display: flex;
  width: 100%;
`;

const AddNewListButton = styled.button`
  width: 40%;
  height: 30px;
`;

const AddNewListInput = styled.input`
  width: 100%;
  height: 30px;
`;

const AddNewListComponent = props => {
  const { boardId, HandleCardAction } = props;
  const NewListRef = useRef(null);

  const HandleListAddition = e =>
    HandleCardAction('ADD_LIST', null, boardId, NewListRef, e);

  return (
    <AddNewListContainer>
      <AddNewList>
        <AddNewListInput
          ref={NewListRef}
          placeholder={'Add To List'}
        />
        <AddNewListButton onClick={HandleListAddition}>
          Add
        </AddNewListButton>
      </AddNewList>
    </AddNewListContainer>
  );
};

export default AddNewListComponent;
