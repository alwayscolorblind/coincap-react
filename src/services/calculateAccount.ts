import { COINCAP_ASSETS } from '../constants/endpoints'
import { CoinType } from '../interfaces/coins'

export const calculateAccount = async (account: Record<string, number>) => {
  const request = await fetch(`${COINCAP_ASSETS}/?ids=${Object.keys(account).join()}`)
  const json = await request.json()
  const data = json.data as CoinType[]

  return data.reduce((previousValue, coin) =>
    (+coin.priceUsd * account[coin.id]) + previousValue, 0)
}
