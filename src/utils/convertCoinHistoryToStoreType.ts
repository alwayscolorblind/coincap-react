import { CoinHistory, CoinHistoryResponse } from '../interfaces/coins';
import { roundNumberString } from './roundNumberString';

export const convertCoinHistoryToStoreType = (history: CoinHistoryResponse): CoinHistory => {
  const date = new Date(history.time)

  const day = `${date.getDate()}`.padStart(2, '0')
  const month = `${date.getMonth() + 1}`.padStart(2, '0')

  const dateString = `${day}.${month}.${date.getFullYear()}`

  return {
    ...history,
    priceUsd: roundNumberString(history.priceUsd),
    circulatingSupply: roundNumberString(history.circulatingSupply),
    date: dateString,
  }
}
