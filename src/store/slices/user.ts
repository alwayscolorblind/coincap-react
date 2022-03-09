import { createSlice } from '@reduxjs/toolkit'

type UserState = {
  loading: boolean,
  error: boolean,
  coins: Record<string, number>,
  account: number,
  previousAccount: number
}

const initialState: UserState = {
  loading: false,
  error: false,
  coins: {},
  account: 0,
  previousAccount: 0,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  },
})
