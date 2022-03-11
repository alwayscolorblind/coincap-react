import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { calculateAccount } from '../../services/calculateAccount'
import { UserStorageType } from '../../interfaces/user'

export type UserState = {
  loading: boolean,
  error: boolean,
  coins: Record<string, number>,
  account: number,
  previousAccount: number,
  addShown: boolean,
  userCoinsShown: boolean,
}

type AddCoinPayload = {
  coinId?: string,
  count: number,
}

type CalculateUserAccountPayload = {
  coins: Record<string, number>,
  force?: boolean,
}

const initialState: UserState = {
  loading: true,
  error: false,
  coins: {},
  account: 0,
  previousAccount: 0,
  addShown: false,
  userCoinsShown: false,
}

export const calculateUserAccount = createAsyncThunk(
  'user/calculateUserAccount',
  async (data: CalculateUserAccountPayload, { dispatch }) => {
    const calculatedAccount = await calculateAccount(data.coins)

    dispatch(setAccount(calculatedAccount))

    if (data.force) {
      dispatch(resetPreviousAccount())
    }

    return calculatedAccount
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addCoin: (state, { payload }: PayloadAction<AddCoinPayload>) => {
      if (!payload.coinId) return

      if (state.coins[payload.coinId]) {
        state.coins[payload.coinId] += payload.count
        return
      }

      state.coins[payload.coinId] = payload.count
    },
    removeCoin: (state, { payload }: PayloadAction<string>) => {
      if (state.coins[payload]) {
        delete state.coins[payload]
      }
    },
    resetPreviousAccount: (state) => {
      state.previousAccount = state.account
    },
    showAddModal: (state) => {
      state.addShown = true
    },
    closeAddModal: (state) => {
      state.addShown = false
    },
    setAccount: (state, { payload }: PayloadAction<number>) => {
      state.account = payload
    },
    setUserDataFromStorage: (state, { payload }: PayloadAction<UserStorageType>) => {
      state.coins = payload.coins
      state.previousAccount = payload.previousAccount
    },
    openUserCoinsModal: (state) => {
      state.userCoinsShown = true
    },
    closeUserCoinsModal: (state) => {
      state.userCoinsShown = false
    },
  },
  extraReducers: (builder) => {
    builder.addCase(calculateUserAccount.pending, (state) => {
      state.loading = true
      state.error = false
    })

    builder.addCase(calculateUserAccount.fulfilled, (state) => {
      state.loading = false
      state.error = false
    })

    builder.addCase(calculateUserAccount.rejected, (state) => {
      state.loading = false
      state.error = true
    })
  }
})

export const {
  setAccount,
  addCoin,
  removeCoin,
  resetPreviousAccount,
  showAddModal,
  closeAddModal,
  setUserDataFromStorage,
  openUserCoinsModal,
  closeUserCoinsModal,
} = userSlice.actions

export const userReducer = userSlice.reducer
