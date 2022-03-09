export type CoinResponseType = {
  id: string,
  rank: string,
  symbol: string,
  name: string,
  supply: string,
  maxSupply: string | null,
  marketCapUsd: string,
  volumeUsd24Hr: string,
  priceUsd: string,
  changePercent24Hr: string,
  vwap24Hr: string,
  explorer: string,
}

export type CoinType = {
  id: string,
  rank: string,
  symbol: string,
  name: string,
  supply: number,
  maxSupply: number | null,
  marketCapUsd: number,
  volumeUsd24Hr: number,
  priceUsd: number,
  changePercent24Hr: number,
  vwap24Hr: number,
  explorer: string,
}
