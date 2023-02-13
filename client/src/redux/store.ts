import { configureStore } from "@reduxjs/toolkit";
import navSliceReducer from './slices/navSlice';

export const store = configureStore({
  reducer: {
    navStateManagement: navSliceReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
