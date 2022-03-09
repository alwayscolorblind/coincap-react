import React, { FC } from 'react'

import { CoinType } from '../../../interfaces/coins'

import './styles.scss'

type MainInformationProps = {
  coinInfo: CoinType,
};

const MainInformation: FC<MainInformationProps> = ({ coinInfo }) => {
  const isPercentUp = coinInfo.changePercent24Hr > 0

  return (
    <div className="main-information">
      <div className="main-information__coin">
        <div className="main-information__coin-content">
          <button className="main-information__coin-button">+ Add</button>

          <div className="main-information__coin-name">
            <h2>{coinInfo.name}</h2>
            <p>{coinInfo.symbol}</p>
          </div>
        </div>
      </div>

      <div className="main-information__finance">
        <div className="main-information__finance-content">
          <h4>{coinInfo.name} Price</h4>

          <div className="main-information__finance-price">
            <h1>{coinInfo.priceUsd}$</h1>

            <div
              className={
                `main-information__finance-percent main-information__finance-percent_${isPercentUp ? 'green' : 'red'}`
              }
            >
              <h4>{isPercentUp ? '+' : ''}{coinInfo.changePercent24Hr}%</h4>
            </div>
          </div>
        </div>

        <div className="main-information__finance-additional">
          <div className="main-information__finance-card">
            <p>Market cap</p>
            <h3>$ {coinInfo.marketCapUsd}</h3>
          </div>

          <div className="main-information__finance-card">
            <p>Volume</p>
            <h3>$ {coinInfo.volumeUsd24Hr}</h3>
          </div>

          <div className="main-information__finance-card">
            <p>Supply</p>
            <h3>$ {coinInfo.supply}</h3>
            {!!coinInfo.maxSupply && (<h5>Max: $ {coinInfo.maxSupply}</h5>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainInformation
