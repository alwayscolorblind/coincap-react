import { COINCAP_ASSETS } from '../constants/endpoints'
import { CoinTypeResponse } from '../interfaces/coins'
import { convertCoinToStoreType } from '../utils/convertCoinToStoreType'

export const getFirstThreeCoins = async () => {
  const response = await fetch(`${COINCAP_ASSETS}/?limit=3`)
  const json = await response.json()
  const data = json.data as CoinTypeResponse[]

  return data.map(coin => convertCoinToStoreType(coin))
}
