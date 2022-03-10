export type CoinTypeResponse = {
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

type CoinTypeExclude = 'supply'
  | 'maxSupply'
  | 'marketCapUsd'
  | 'volumeUsd24Hr'
  | 'priceUsd'
  | 'changePercent24Hr'
  | 'vwap24Hr'

export type CoinType = Omit<CoinTypeResponse, CoinTypeExclude> & {
  supply: number,
  maxSupply: number | null,
  marketCapUsd: number,
  volumeUsd24Hr: number,
  priceUsd: number,
  changePercent24Hr: number,
  vwap24Hr: number,
}

export type CoinHistoryResponse = {
  priceUsd: string,
  time: number,
  circulatingSupply: string,
  date: string
}

type CoinHistoryExclude = 'priceUsd' | 'circulatingSupply'

export type CoinHistory = Omit<CoinHistoryResponse, CoinHistoryExclude> & {
  priceUsd: number,
  circulatingSupply: number,
}
