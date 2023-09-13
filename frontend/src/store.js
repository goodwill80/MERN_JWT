import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import { apiSlice } from './slices/apiSlice';

const store = configureStore({
  // Here is where you store all your reducers
  reducer: {
    auth: authReducer,
    // Way how you define api reducer in a store
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  // To enable use of redux dev tool
  devTools: true,
});

// To bring this into main entry point
export default store;
