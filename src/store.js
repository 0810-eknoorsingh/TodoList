import { createStore, combineReducers } from 'redux';

const initialState = {
  boards: {
    1: { id: 1, name: 'Platform Launch', tasks: { todo: [], doing: [], done: [] } },
  },
  boardOrder: [1],
};

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOARD':
      return {
        ...state,
        boards: {
          ...state.boards,
          [action.payload.id]: action.payload,
        },
        boardOrder: [...state.boardOrder, action.payload.id],
      };
    case 'ADD_TASK':
      const { boardId, category, task } = action.payload;
      return {
        ...state,
        boards: {
          ...state.boards,
          [boardId]: {
            ...state.boards[boardId],
            tasks: {
              ...state.boards[boardId].tasks,
              [category]: [...state.boards[boardId].tasks[category], task],
            },
          },
        },
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  boards: boardReducer,
});

const store = createStore(rootReducer);

export default store;
