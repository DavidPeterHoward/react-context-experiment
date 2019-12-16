export const CardReducer = (boards, action) => {
  // todo: extract reusable logic
  // todo: break into singular components
  switch (action.type) {
    case 'ADD_CARD':
      var boardById = boards[action.boardId];
      boardById.list.map(el => {
        console.log(el.listId + ' : ' + action.listId);
        if (el.listId === action.listId) {
          // The new card object to add
          console.log('working?');
          const ObjToPush = {
            cardId: el.cards.length + 1,
            cardTitle: action.title,
            cardContent: 'nada!',
          };
          return el.cards.push(ObjToPush);
        } else {
          return el;
        }
      });
      return { ...boards };
    case 'MOVE_CARD':
      console.log('are we here too?');
      var boardById = boards[action.boardId];
      const prevList = action.prevListId;
      /*       console.log(prevList);
      console.log(action.listId); */
      boardById.list.map(initialList => {
        /*         console.log('action.listId: ' + action.listId);
        console.log('list loop list: ' + initialList.listId); */
        /*         console.log('we need to cycle' + initialList.listId);
        console.log('we need to match' + action.listId); */
        if (initialList.listId === parseInt(action.listId)) {
          const ObjToPush = {
            cardId: initialList.cards.length + 1,
            cardTitle: action.title,
            cardContent: action.content,
          };
          return initialList.cards.push(ObjToPush);
        } else {
          return initialList;
        }
        /*         if (initialList.listId === parseInt(prevList)) {
          return initialList.cards.map(currentCard => {
            if (currentCard.cardId === action.cardId) {
              initialList.cards = initialList.cards.filter(
                currentEl => {
                  initialList.cards =
                    currentEl.cardId !== action.cardId;
                  return initialList.cards;
                },
              );
            }
          });
        } */
      });
      return { ...boards };
    case 'REORDER_CARD':
      return { ...boards };
    case 'EDIT_CARD':
      return boards;
    case 'DELETE_CARD':
      var boardById = boards[action.boardId];
      boardById.list.map(initialList => {
        if (initialList.listId === action.listId) {
          return initialList.cards.map(currentCard => {
            if (currentCard.cardId === action.cardId) {
              initialList.cards = initialList.cards.filter(
                currentEl => {
                  initialList.cards =
                    currentEl.cardId !== action.cardId;
                  return initialList.cards;
                },
              );
            }
          });
        }
      });
      return { ...boards };

    default:
      return boards;
  }
};

export default CardReducer;
