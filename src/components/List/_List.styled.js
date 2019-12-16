import styled, { css } from 'styled-components/macro';

export const ListContainer = styled.div`
  width: 300px;
  height: 100%;
  min-height: 300px;
  border: 1px solid black;
  margin: 1em;
  padding: 1em;
  &:hover {
    background: salmon;
  }
`;

export const List = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid grey;
`;

export const ListTitle = styled.h3``;
