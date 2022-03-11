import { createSlice } from '@reduxjs/toolkit'

type UIState = {
  menuShown: boolean,
}

const initialState: UIState = {
  menuShown: false,
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    closeMenu: (state) => {
      state.menuShown = false
    },
    toggleMenu: (state) => {
      state.menuShown = !state.menuShown
    }
  },
})

export const {
  toggleMenu,
  closeMenu,
} = uiSlice.actions

export const uiReducer = uiSlice.reducer
