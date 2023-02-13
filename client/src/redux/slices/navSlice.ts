import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentNavPage: '',
  isNavOpen: false,
}

export const navSlice = createSlice({
  name: 'navStateManagement',
  initialState,
  reducers: {
    setCurrentNavPage: (state, action) => {
      state.currentNavPage = action.payload
    },
    setIsNavOpen: (state, action) => {
      state.isNavOpen = action.payload
    },
  },
})

export const { setCurrentNavPage, setIsNavOpen } = navSlice.actions

export default navSlice.reducer