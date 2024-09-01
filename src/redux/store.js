import { configureStore } from '@reduxjs/toolkit';
import boardsReducer from './boardSlice';
import tasksReducer from './taskSlice';

const store = configureStore({
  reducer: {
    boards: boardsReducer,
    tasks: tasksReducer,
  },
});

export default store;
