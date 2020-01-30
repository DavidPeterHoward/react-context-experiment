import styled, { css } from "styled-components/macro";

export const Card = styled.div`
  border: 1px solid #ececec;
  min-height: 80px;
  padding: 1em;
  margin: 1em;
  cursor: grab;
  &.dragActive {
    background: #fff;
    position: absolute;
    cursor: grabbing !important;
  }
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 25px;
  height: 25px;
`;
