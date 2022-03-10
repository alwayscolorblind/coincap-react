import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { CoinHistory, CoinType } from '../../interfaces/coins';
import { getCoinInfo } from '../../services/getCoinInfo'
import { getCoinHistory } from '../../services/getCoinHistory';

type CoinState = {
  loading: boolean,
  error: boolean,
  coin: CoinType | null,
  coinHistory: CoinHistory[],
}

const initialState: CoinState = {
  loading: true,
  error: false,
  coin: null,
  coinHistory: [],
}

export const fetchCoinInfo = createAsyncThunk(
  'coin/fetchCoinInfo',
  async (coinId: string) => {
    const coin = await getCoinInfo(coinId)
    const coinHistory = await getCoinHistory(coinId)

    return {
      coin,
      coinHistory,
    }
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
      state.coin = payload.coin
      state.coinHistory = payload.coinHistory
    })

    builder.addCase(fetchCoinInfo.rejected, (state) => {
      state.error = true
      state.loading = false
    })
  })
})

export const coinReducer = coinSlice.reducer
