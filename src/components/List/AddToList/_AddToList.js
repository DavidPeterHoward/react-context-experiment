import React from 'react';
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
  return (
    <AddToListContainer>
      <AddToList>
        <AddToListInput placeholder={'Add To List'} />
        <AddToListButton>Add</AddToListButton>
      </AddToList>
    </AddToListContainer>
  );
};

export default AddToListComponent;
