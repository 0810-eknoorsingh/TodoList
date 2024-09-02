import { createSlice } from '@reduxjs/toolkit';

const boardsSlice = createSlice({
  name: 'boards',
  initialState: {
    activeBoardId: null,
    list: [],
  },
  reducers: {
    addBoard: (state, action) => {
      const newBoardId = state.list.length + 1;
      state.list.push({
        id: newBoardId,
        name: action.payload,
        tasks: {
          Todo: [],
          Doing: [],
          Done: [],
        },
      });
      state.activeBoardId = newBoardId; // Set the new board as the active board
    },
    setActiveBoard: (state, action) => {
      state.activeBoardId = action.payload;
    },
    addTaskToBoard: (state, action) => {
      const { boardId, task, status } = action.payload;
      const board = state.list.find((board) => board.id === boardId);
      if (board) {
        board.tasks[status].push(task);
      }
    },
  },
});

export const { addBoard, setActiveBoard, addTaskToBoard } = boardsSlice.actions;
export default boardsSlice.reducer;
