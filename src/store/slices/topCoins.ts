import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { CoinType } from '../../interfaces/coins'
import { getFirstThreeCoins } from '../../services/getFirstThreeCoins'

type TopCoinsState = {
  loading: boolean,
  error: boolean,
  topCoins: CoinType[],
}

const initialState: TopCoinsState = {
  loading: true,
  error: false,
  topCoins: [],
}

export const fetchFirstThreeCoins = createAsyncThunk(
  'topCoins/fetchFirstThreeCoins',
  async () => {
    const coins = await getFirstThreeCoins()

    return coins
  }
)

export const topCoinsSlice = createSlice({
  name: 'topCoins',
  initialState,
  reducers: {},
  extraReducers: (builder => {
    builder.addCase(fetchFirstThreeCoins.pending, (state) => {
      state.error = false
      state.loading = true
    })

    builder.addCase(fetchFirstThreeCoins.fulfilled, (state, { payload }) => {
      state.error = false
      state.loading = false
      state.topCoins = payload
    })

    builder.addCase(fetchFirstThreeCoins.rejected, (state) => {
      state.error = true
      state.loading = false
    })
  })
})

export const topCoinsReducer = topCoinsSlice.reducer
