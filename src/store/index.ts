import { configureStore } from '@reduxjs/toolkit'

import { coinReducer } from './slices/coin'
import { coinsReducer } from './slices/coins'
import { userReducer } from './slices/user'

export const store = configureStore({
  reducer: {
    coin: coinReducer,
    coins: coinsReducer,
    user: userReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
