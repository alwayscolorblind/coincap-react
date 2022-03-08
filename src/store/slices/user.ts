import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '..'

type UserState = {
  loading: boolean,
  coins: Record<string, number>,
  account: number,
  previousAccount: number
}

const initialState: UserState = {
  loading: false,
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
