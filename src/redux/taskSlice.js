import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasksByBoardId: {},
  },
  reducers: {
    addTask: (state, action) => {
      const { boardId, task } = action.payload;
      if (!state.tasksByBoardId[boardId]) {
        state.tasksByBoardId[boardId] = [];
      }

      state.tasksByBoardId[boardId].push(task);
    },
  },
});

export const { addTask } = tasksSlice.actions;
export default tasksSlice.reducer;
