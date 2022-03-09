import { configureStore } from '@reduxjs/toolkit'

import { coinReducer } from './slices/coin'
import { coinsReducer } from './slices/coins'

export const store = configureStore({
  reducer: {
    coin: coinReducer,
    coins: coinsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
