import React, { useState } from 'react';
import CardComponent from './_Card';

const CardContainer = props => {
  const [isDragging, setIsDragging] = useState(false);
  const [previousLeft, setPreviousLeft] = useState(0);
  const [previousTop, setPreviousTop] = useState(0);

  const [currentLeft, setCurrentLeft] = useState(0);
  const [currentTop, setCurrentTop] = useState(0);
  const [prevDrop, setPrevDrop] = useState(0);
  const [prevDropChild, setPrevDropChild] = useState(0);

  const {
    // data
    key,
    id,
    title,
    content,
    // data identifiers
    boardId,
    listId,
    // actions
    HandleCardData,
    HandleCardAction,
  } = props;

  const HandlePointerDown = e => {
    // onDown
    setIsDragging(true);
    e.target.classList.add('dragActive');
    e.target.setPointerCapture(e.pointerId);

    e.target.style.width = e.target.offsetWidth + 'px';
    e.target.style.height = e.target.offsetHeight + 'px';
  };
  /* , ...args HandleCardData*/
  const HandlePointerUp = e => {
    //onUp
    setIsDragging(false);
    e.target.classList.remove('dragActive');
    e.target.releasePointerCapture(e.pointerId);

    // onPointerUp={HandlePointerUp(HandleCardData)}
    // sends the action back
    /*     HandleCardData(...args, e); */

    e.target.style.left = 'inherit';
    e.target.style.top = 'inherit';

    /*
  todo: work on card actions for movement
   *  if(cardInCurrentListID === NewListID)
   *  HandleCardAction('MOVE_CARD_BETWEEN_LISTS', listId, boardId, id, e)
   *
   *  If(CardInCurrentListID !== NewListID)
   *  HandleCardAction('MOVE_WITHIN_LIST', listId, boardId, id, e)
   *
   * PASS THE POSITION OF
   *
   */
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

  const HandlePointerMove = e => {
    // onMove
    // todo: split into smaller functions
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

    const { left, top } = ExtractPositionDelta(e);

    setCurrentTop(currentTop + top);
    setCurrentLeft(currentLeft + left);

    e.target.style.left = currentLeft + left + 'px';
    e.target.style.top = currentTop + top + 'px';
  };

  return (
    <CardComponent
      key={key}
      id={id}
      title={title}
      content={content}
      boardId={boardId}
      listId={id}
      HandleCardAction={HandleCardAction}
      HandleCardData={HandleCardData}
      HandlePointerDown={HandlePointerDown}
      HandlePointerUp={HandlePointerUp}
      HandlePointerMove={HandlePointerMove}
    />
  );
};

export default CardContainer;
