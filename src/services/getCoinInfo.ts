import { COINCAP_ASSETS } from '../constants/endpoints'
import { CoinResponseType } from '../interfaces/coins'
import { convertCoinToStoreType } from '../utils/convertCoinToStoreType'

export const getCoinInfo = async (coinId: string) => {
  const response = await fetch(`${COINCAP_ASSETS}/${coinId}`)
  const json = await response.json()

  return convertCoinToStoreType(json.data as CoinResponseType)
}
