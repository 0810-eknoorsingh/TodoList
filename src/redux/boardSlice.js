import { createSlice } from '@reduxjs/toolkit';

const boardSlice = createSlice({
  name: 'boards',
  initialState: {
    list: [], 
    activeBoardId: null,
  },
  reducers: {
    addBoard: (state, action) => {
      state.list.push({
        id: Date.now(),  
        name: action.payload,
        tasks: { Todo: [], Doing: [], Done: [] },
      });
    },
    setActiveBoard: (state, action) => {
      state.activeBoardId = action.payload;
    },
    deleteBoard: (state, action) => {
      state.list = state.list.filter(board => board.id !== action.payload);
      if (state.activeBoardId === action.payload) {
        state.activeBoardId = null; 
      }
    },
    addTaskToBoard: (state, action) => {
      const { boardId, task, status } = action.payload;
      const board = state.list.find(board => board.id === boardId);
      if (board) {
        board.tasks[status].push({
          id: Date.now(),
          ...task,
        });
      }
    },
    editTask: (state, action) => {
      const { boardId, taskId, updatedTask } = action.payload;
      const board = state.list.find(board => board.id === boardId);
      if (board) {
       
        let currentStatus = null;
        let taskIndex = -1;
        
        Object.keys(board.tasks).forEach(status => {
          const index = board.tasks[status].findIndex(task => task.id === taskId);
          if (index !== -1) {
            currentStatus = status;
            taskIndex = index;
          }
        });

        if (currentStatus && taskIndex !== -1) {
          const task = board.tasks[currentStatus][taskIndex];
          const { title, description, status: newStatus } = updatedTask;

          task.title = title;
          task.description = description;

          
          if (currentStatus !== newStatus) {
            board.tasks[currentStatus].splice(taskIndex, 1);
            board.tasks[newStatus].push(task);
          }
        }
      }
    },
    deleteTask: (state, action) => {
      const { boardId, taskId } = action.payload;
      const board = state.list.find(board => board.id === boardId);
      if (board) {
        Object.keys(board.tasks).forEach(status => {
          board.tasks[status] = board.tasks[status].filter(task => task.id !== taskId);
        });
      }
    },
  },
});

export const { addBoard, setActiveBoard, deleteBoard, addTaskToBoard, editTask, deleteTask } = boardSlice.actions;
export default boardSlice.reducer;
