import React, { FC } from 'react'

import "./styles.scss"

type CoinProps = {
  symbol: string,
  priceUSD: number,
  changePercent: number,
}

const Coin: FC<CoinProps> = ({
  symbol,
  priceUSD,
  changePercent,
}) => {
  const priceUSDRounded = Math.round(priceUSD * 100) / 100
  const changePercentRounded = Math.round(changePercent * 100) / 100

  const isPriceDown = changePercentRounded < 0

  return (
    <div className="coin">
      <h3>{symbol}</h3>

      <div className="coin__data">
        <p>{priceUSDRounded} $</p>

        <p className={`coin__percent coin__percent_${isPriceDown ? 'down' : 'up'}`}>
          {isPriceDown || '+'}{changePercentRounded}%
        </p>
      </div>
    </div>
  )
}

export default Coin
