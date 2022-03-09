import { COINCAP_ASSETS } from '../constants/endpoints'
import { COINS_PER_PAGE } from '../constants/constants'
import { CoinResponseType } from '../interfaces/coins'
import { convertCoinToStoreType } from '../utils/convertCoinToStoreType'

export const getCoinsPerPage = async (page: number) => {
  const offset = (page - 1) * COINS_PER_PAGE

  const response = await fetch(`${COINCAP_ASSETS}?offset=${offset}&limit=${COINS_PER_PAGE}`)
  const json = await response.json()
  const coins = json.data as CoinResponseType[]

  return coins.map(coin => convertCoinToStoreType(coin))
}
