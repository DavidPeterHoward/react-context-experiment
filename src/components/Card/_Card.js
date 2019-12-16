import React, { useState } from 'react';
import styled, { css } from 'styled-components/macro';

const Card = styled.div`
  border: 1px solid blue;
  min-height: 80px;
  padding: 1em;
  margin: 1em;
  &.dragActive {
    background: red;
    position: absolute;
  }
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 25px;
  height: 25px;
`;

const CardComponent = props => {
  const [isDragging, setIsDragging] = useState(false);
  const [previousLeft, setPreviousLeft] = useState(0);
  const [previousTop, setPreviousTop] = useState(0);

  const [currentLeft, setCurrentLeft] = useState(0);
  const [currentTop, setCurrentTop] = useState(0);
  const [prevDrop, setPrevDrop] = useState(0);
  const [prevDropChild, setPrevDropChild] = useState(0);

  const {
    id,
    title,
    content,
    HandleCardAction,
    boardId,
    listId,
    currentHover,
    sendListId,
    listOnMouseOver,
  } = props;

  const onDown = e => {
    e.stopPropagation();
    e.preventDefault();
    setIsDragging(true);
    e.target.style.width = e.target.offsetWidth + 'px';
    e.target.style.height = e.target.offsetHeight + 'px';
    e.target.classList.add('dragActive');
    e.target.setPointerCapture(e.pointerId);

    e.preventDefault();
  };

  const onUp = e => {
    e.target.classList.remove('dragActive');
    setIsDragging(false);
    sendListId(listId, id, title, content, e);
    e.target.style.left = 'inherit';
    e.target.style.top = 'inherit';
    e.target.releasePointerCapture(e.pointerId);
  };

  const extractPositionDelta = e => {
    const left = e.pageX - e.target.offsetWidth / 2;
    const top = e.pageY - e.target.offsetHeight / 2;

    const delta = {
      left: left - previousLeft,
      top: top - previousTop,
    };
    setPreviousTop(top);
    setPreviousLeft(left);

    return delta;
  };
  const onMove = e => {
    if (!isDragging) {
      return;
    }
    e.target.hidden = true;
    let elemBelow = document.elementFromPoint(e.clientX, e.clientY);
    // console.dir(elemBelow);
    e.target.hidden = false;
    let droppableBelow = elemBelow.closest('.list');
    setPrevDrop(droppableBelow);

    if (droppableBelow === prevDrop && droppableBelow !== null) {
      // potential to find child elements
      e.target.hidden = true;
      let childBelow = document.elementFromPoint(
        e.clientX,
        e.clientY,
      );
      e.target.hidden = false;
      let droppableChild = childBelow.closest(
        '.card:not(.dragActive)',
      );
      setPrevDropChild(droppableChild);
      if (
        droppableChild !== null &&
        droppableChild !== prevDropChild
      ) {
        console.log(droppableChild);
      }
    }

    if (droppableBelow !== prevDrop && droppableBelow !== null) {
      console.log(droppableBelow);
      e.target.hidden = true;
      let childBelow = document.elementFromPoint(
        e.clientX,
        e.clientY,
      );
      e.target.hidden = false;
      let droppableChild = childBelow.closest(
        '.card:not(.dragActive)',
      );
      if (droppableChild !== null) {
        console.log(droppableChild);
      }
    }

    const { left, top } = extractPositionDelta(e);

    setCurrentTop(currentTop + top);
    setCurrentLeft(currentLeft + left);

    e.target.style.left = currentLeft + left + 'px';
    e.target.style.top = currentTop + top + 'px';
  };

  return (
    <Card
      id={id}
      className={'card'}
      onPointerDown={e => onDown(e)}
      onPointerUp={e => onUp(e)}
      onPointerMove={e => onMove(e)}
      onPointerCancel={e => onUp(e)}
    >
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
