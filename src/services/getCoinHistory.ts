import { COINCAP_ASSETS } from '../constants/endpoints';
import { CoinHistoryResponse } from '../interfaces/coins';
import { convertCoinHistoryToStoreType } from '../utils/convertCoinHistoryToStoreType';

export const getCoinHistory = async (id: string) => {
  const end = Date.now()
  const start = new Date(Date.now())
  start.setUTCDate(-7)

  const period = `start=${start.getTime()}&end=${end}`

  const response = await fetch(`${COINCAP_ASSETS}/${id}/history?interval=d1&${period}`)
  const json = await response.json()
  const coinsHistory = json.data as CoinHistoryResponse[]

  return coinsHistory.map(coinsHistory => convertCoinHistoryToStoreType(coinsHistory))
}
