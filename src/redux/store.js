import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import boardsReducer from './boardSlice';
import tasksReducer from './taskSlice';



const persistConfig = {
  key: 'root',
  storage,
  
};


const persistedReducer = persistReducer(persistConfig, (state = {}, action) => ({
  boards: boardsReducer(state.boards, action),
  tasks: tasksReducer(state.tasks, action),
}));

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store;
