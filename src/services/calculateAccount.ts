import { COINCAP_ASSETS } from '../constants/endpoints'
import { CoinTypeResponse } from '../interfaces/coins'

export const calculateAccount = async (account: Record<string, number>) => {
  const response = await fetch(`${COINCAP_ASSETS}/?ids=${Object.keys(account).join()}`)
  const json = await response.json()
  const data = json.data as CoinTypeResponse[]

  return data.reduce((previousValue, coin) =>
    (+coin.priceUsd * account[coin.id]) + previousValue, 0)
}
