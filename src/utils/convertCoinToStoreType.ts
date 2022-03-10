import { CoinTypeResponse, CoinType } from '../interfaces/coins'
import { roundNumberString } from './roundNumberString'

export const convertCoinToStoreType = (coin: CoinTypeResponse): CoinType => ({
  ...coin,
  supply: roundNumberString(coin.supply),
  maxSupply: roundNumberString(coin.maxSupply || '0'),
  marketCapUsd: roundNumberString(coin.marketCapUsd),
  volumeUsd24Hr: roundNumberString(coin.volumeUsd24Hr),
  priceUsd: roundNumberString(coin.priceUsd),
  changePercent24Hr: roundNumberString(coin.changePercent24Hr),
  vwap24Hr: roundNumberString(coin.vwap24Hr),
})
