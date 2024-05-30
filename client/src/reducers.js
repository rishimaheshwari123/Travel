import { combineReducers } from '@reduxjs/toolkit';
import adminSlice from './adminSlice'; // Import your slices

const rootReducer = combineReducers({
  admin: adminSlice,
  // Add other slices here
});

export default rootReducer;
