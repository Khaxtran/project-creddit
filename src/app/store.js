import { configureStore, combineReducers } from '@reduxjs/toolkit';
import credditReducer from './credditSlice';

export const store = configureStore({
  reducer: combineReducers({
    creddit: credditReducer,
    
  })
});
