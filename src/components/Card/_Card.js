import React from 'react';
import styled, { css } from 'styled-components/macro';

const Card = styled.div`
  border: 1px solid blue;
  min-height: 80px;
  padding: 1em;
  margin: 1em;
  position: relative;
`;

const CardComponent = props => {
  const { id, title, content } = props;
  return (
    <Card id={id}>
      {title}
      <br />
      {content}
    </Card>
  );
};

export default CardComponent;
