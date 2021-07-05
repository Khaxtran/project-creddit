import { configureStore, combineReducers } from '@reduxjs/toolkit';
import credditReducer from './credditSlice';
import subCredditReducer from './subCredditSlice';

export const store = configureStore({
  reducer: combineReducers({
    creddit: credditReducer,
    subcreddits: subCredditReducer,
  })
});
