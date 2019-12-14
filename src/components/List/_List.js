import React from 'react';
import styled, { css } from 'styled-components/macro';
import AddToList from './AddToList/_AddToList';

const ListContainer = styled.div`
  width: 300px;
  height: 500px;
  border: 1px solid black;
  margin: 1em;
  padding: 1em;
`;

const List = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid grey;
  position: relative;
`;

const ListTitle = styled.h3``;

const ListComponent = () => {
  return (
    <ListContainer>
      <ListTitle>Title of list: [1]</ListTitle>
      <AddToList></AddToList>
      <List></List>
    </ListContainer>
  );
};

export default ListComponent;
