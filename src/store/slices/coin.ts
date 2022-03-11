import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'

import { CoinHistory, CoinType } from '../../interfaces/coins';
import { getCoinInfo } from '../../services/getCoinInfo'
import { getCoinHistory } from '../../services/getCoinHistory';

type CoinState = {
  loading: boolean,
  error: boolean,
  coin: CoinType | null,
  coinHistory: CoinHistory[],
  tempCoin: CoinType | null,
}

const initialState: CoinState = {
  loading: true,
  error: false,
  coin: null,
  coinHistory: [],
  tempCoin: null,
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
  reducers: {
    addTempCoin: (state, { payload }: PayloadAction<CoinType>) => {
      state.tempCoin = payload
    },
    removeTempCoin: (state) => {
      state.tempCoin = null
    },
  },
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

export const {
  addTempCoin,
  removeTempCoin,
} = coinSlice.actions

export const coinReducer = coinSlice.reducer

