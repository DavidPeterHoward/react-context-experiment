import React, { useState } from 'react';
import CardComponent from './_Card';

const CardContainer = props => {
  // check if dragging
  const [isDragging, setIsDragging] = useState(false);

  // get current left / top
  const [currentLeft, setCurrentLeft] = useState(0);
  const [currentTop, setCurrentTop] = useState(0);

  // get previous left / top
  const [previousLeft, setPreviousLeft] = useState(0);
  const [previousTop, setPreviousTop] = useState(0);

  // get current drop target, previous drop target, and, prev child drop target
  const [dropList, setDropList] = useState(null);
  const [prevDrop, setPrevDrop] = useState(null);
  const [prevDropChild, setPrevDropChild] = useState(null);

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
    HandleMoveCard,
  } = props;

  const HandlePointerDown = e => {
    // onDown

    // makes sure the width / height of the element is the same
    // when positioned absolutely
    e.target.style.width = e.target.offsetWidth + 'px';
    e.target.style.height = e.target.offsetHeight + 'px';

    setIsDragging(true);
    e.target.classList.add('dragActive');
    e.target.setPointerCapture(e.pointerId);
  };

  const HandlePointerUp = e => {
    //onUp
    setIsDragging(false);
    e.target.classList.remove('dragActive');
    e.target.releasePointerCapture(e.pointerId);

    e.target.style.left = 'inherit';
    e.target.style.top = 'inherit';
    if (
      dropList !== null &&
      dropList !== undefined &&
      prevDrop !== dropList
    ) {
      HandleCardData(dropList, listId, id, title, content, e);
    } else {
    }
  };

  const ExtractPositionDelta = e => {
    // ExtractPositionDelta
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

  const CheckElementBelow = e => {
    e.target.hidden = true;
    const elemBelow = document.elementFromPoint(e.clientX, e.clientY);
    e.target.hidden = false;
    var droppableBelow = elemBelow.closest('.list');
    setPrevDrop(droppableBelow);
    if (droppableBelow !== null) {
      return (droppableBelow = droppableBelow.dataset.listid);
    }
  };

  const HandlePointerMove = e => {
    // onMove
    if (!isDragging) {
      return;
    }
    const droppableBelow = CheckElementBelow(e);

    if (
      parseInt(droppableBelow) !== listId &&
      droppableBelow !== null
    ) {
      setDropList(droppableBelow);
    }
    const { left, top } = ExtractPositionDelta(e);

    setCurrentTop(currentTop + top);
    setCurrentLeft(currentLeft + left);

    e.target.style.left = currentLeft + left + 'px';
    e.target.style.top = currentTop + top + 'px';
  };

  const HandleOnClick = e => {
    // todo: make this create a modal for editing 'cards'
    console.log(e.target);
  };

  return (
    <CardComponent
      id={id}
      title={title}
      content={content}
      boardId={boardId}
      listId={listId}
      HandleOnClick={HandleOnClick}
      HandleCardAction={HandleCardAction}
      HandleCardData={HandleCardData}
      HandlePointerDown={HandlePointerDown}
      HandlePointerUp={HandlePointerUp}
      HandlePointerMove={HandlePointerMove}
    />
  );
};

export default CardContainer;
