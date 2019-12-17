export const CardReducer = (boards, action) => {
  // todo: extract reusable logic
  // todo: break into singular components
  switch (action.type) {
    case 'ADD_CARD':
      var boardById = boards[action.boardId];
      if (boardById.list === undefined) {
        console.log('error!');
        console.log(action.boardId);
      }
      // console.log(typeof boardById);
      boardById.list.map(el => {
        /*         console.log(el.listId + ' : ' + action.listId); */
        if (el.listId === action.listId) {
          // The new card object to add
          // console.log('working?');
          const ObjToPush = {
            cardId: el.cards.length + 1,
            cardTitle: action.title,
            cardContent: 'nada!',
          };
          return el.cards.push(ObjToPush);
        } else {
          console.log(el);
        }
      });
      console.log({ ...boards });
      return { ...boards };
    case 'MOVE_CARD':
      // console.log('are we here too?');
      var boardById = boards[action.boardId];
      const prevList = action.prevListId;
      /*       console.log(prevList);
      console.log(action.listId); */
      boardById.list.map(initialList => {
        /*         console.log('action.listId: ' + action.listId);
        console.log('list loop list: ' + initialList.listId); */
        /*         console.log('we need to cycle' + initialList.listId);
        console.log('we need to match' + action.listId); */
        if (
          initialList.listId === parseInt(action.listId) &&
          parseInt(action.listId) !== parseInt(action.prevListId) &&
          parseInt(action.listId) !== parseInt(action.prevListId)
        ) {
          const ObjToPush = {
            cardId: initialList.cards.length + 1,
            cardTitle: action.title,
            cardContent: action.content,
          };
          // console.log("i should've done something");
          return initialList.cards.push(ObjToPush);
        } else {
          // console.log('SOMETHING WENT WRONG!?');
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
    case 'ADD_LIST':
      console.log('add_list_reducer has started');
      var CurrentBoard = boards;
      // console.log(CurrentBoard2);

      var Holder = CurrentBoard.map(el => {
        if (el.boardId === action.boardId) {
          const ListToPush = {
            listId: el.list.length,
            listTitle: action.title,
            listContent: 'nada!',
            cards: [
              {
                cardId: 0,
                cardTitle: 'NEW CARD',
                cardContent: 'Some Content In Card',
              },
            ],
          };
          el.list.push(ListToPush);

          return el;
        }
        return el;
      });

      /*       var boardById = boards[action.boardId];
      boardById.list.push('hey!');
 */
      /*       console.log(boardById.list);

      console.log(boardById); */

      return Holder;
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
