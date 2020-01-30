export const CardReducer = (boards, action) => {
  switch (action.type) {
    case "ADD_CARD":
      var boardById = boards[action.boardId];
      if (boardById.list === undefined) {
      }
      boardById.list.map(el => {
        if (el.listId === action.listId) {
          const ObjToPush = {
            cardId: el.cards.length + 1,
            cardTitle: action.title,
            cardContent: "nada!"
          };
          return el.cards.push(ObjToPush);
        } else {
        }
      });
      return { ...boards };
    case "MOVE_CARD":
      var boardById = boards[action.boardId];
      const prevList = action.prevListId;

      boardById.list.map(initialList => {
        if (
          initialList.listId === parseInt(action.listId) &&
          parseInt(action.listId) !== parseInt(action.prevListId) &&
          parseInt(action.listId) !== parseInt(action.prevListId)
        ) {
          const ObjToPush = {
            cardId: initialList.cards.length + 1,
            cardTitle: action.title,
            cardContent: action.content
          };
          return initialList.cards.push(ObjToPush);
        } else {
          return initialList;
        }
      });
      return { ...boards };
    case "REORDER_CARD":
      return { ...boards };
    case "ADD_LIST":
      var CurrentBoard = boards;

      var Holder = CurrentBoard.map(el => {
        if (el.boardId === action.boardId) {
          const ListToPush = {
            listId: el.list.length,
            listTitle: action.title,
            listContent: "nada!",
            cards: [
              {
                cardId: 0,
                cardTitle: "NEW CARD",
                cardContent: "Some Content In Card"
              }
            ]
          };
          el.list.push(ListToPush);

          return el;
        }
        return el;
      });
      return Holder;
    case "DELETE_CARD":
      var boardById = boards[action.boardId];
      boardById.list.map(initialList => {
        if (initialList.listId === action.listId) {
          return initialList.cards.map(currentCard => {
            if (currentCard.cardId === action.cardId) {
              initialList.cards = initialList.cards.filter(currentEl => {
                initialList.cards = currentEl.cardId !== action.cardId;
                return initialList.cards;
              });
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
