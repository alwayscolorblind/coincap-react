import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { CoinType } from '../../interfaces/coins'
import { getCoinInfo } from '../../services/getCoinInfo'

type CoinState = {
  loading: boolean,
  error: boolean,
  coin: CoinType | null,
}

const initialState: CoinState = {
  loading: true,
  error: false,
  coin: null,
}

export const fetchCoinInfo = createAsyncThunk(
  'coin/fetchCoinInfo',
  async (coinId: string) => {
    const coinInfo = await getCoinInfo(coinId)

    return coinInfo
  }
)

export const coinSlice = createSlice({
  name: 'coin',
  initialState,
  reducers: {},
  extraReducers: (builder => {
    builder.addCase(fetchCoinInfo.pending, (state) => {
      state.error = false
      state.loading = true
    })

    builder.addCase(fetchCoinInfo.fulfilled, (state, { payload }) => {
      state.error = false
      state.loading = false
      state.coin = payload
    })

    builder.addCase(fetchCoinInfo.rejected, (state) => {
      state.error = true
      state.loading = false
    })
  })
})

export const coinReducer = coinSlice.reducer
