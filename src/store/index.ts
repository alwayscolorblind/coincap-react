import { configureStore } from '@reduxjs/toolkit'

import { coinReducer } from './slices/coin'
import { coinsReducer } from './slices/coins'
import { userReducer } from './slices/user'
import { uiReducer } from './slices/ui'
import { topCoinsReducer } from './slices/topCoins'

export const store = configureStore({
  reducer: {
    coin: coinReducer,
    coins: coinsReducer,
    user: userReducer,
    ui: uiReducer,
    topCoins: topCoinsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
