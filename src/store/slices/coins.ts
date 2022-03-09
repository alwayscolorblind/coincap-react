import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { CoinType } from '../../interfaces/coins'
import { getCoinsPerPage } from '../../services/getCoinsPerPage'

type CoinsState = {
  loading: boolean,
  error: boolean,
  coins: CoinType[],
}

const initialState: CoinsState = {
  loading: true,
  error: false,
  coins: [],
}

export const fetchCoinsPerPage = createAsyncThunk(
  'coins/fetchCoinsPerPage',
  async (page: number) => {
    const coins = await getCoinsPerPage(page)

    return coins
  }
)

export const coinsSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {},
  extraReducers: (builder => {
    builder.addCase(fetchCoinsPerPage.pending, (state) => {
      state.error = false
      state.loading = true
    })

    builder.addCase(fetchCoinsPerPage.fulfilled, (state, { payload }) => {
      state.error = false
      state.loading = false
      state.coins = payload
    })

    builder.addCase(fetchCoinsPerPage.rejected, (state) => {
      state.error = true
      state.loading = false
    })
  })
})


export const coinsReducer = coinsSlice.reducer
