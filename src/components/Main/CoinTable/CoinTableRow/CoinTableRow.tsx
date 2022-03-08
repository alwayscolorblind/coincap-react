import React, { FC } from 'react'

import { CoinType } from '../../../../interfaces/coins'

import './styles.scss'
import { useNavigate } from 'react-router-dom'

type CoinTableRowProps = {
  coin: CoinType
};

const CoinTableRow: FC<CoinTableRowProps> = ({ coin }) => {
  const navigate = useNavigate()

  const {
    id,
    rank,
    symbol,
    name,
    supply,
    marketCapUsd,
    volumeUsd24Hr,
    priceUsd,
    changePercent24Hr,
  } = coin

  const priceUSDRounded = Math.round(+priceUsd * 100) / 100
  const changePercentRounded = Math.round(+changePercent24Hr * 100) / 100
  const marketCapRounded = Math.round(+marketCapUsd * 100) / 100
  const volumeRounded = Math.round(+volumeUsd24Hr * 100) / 100
  const supplyRounded = Math.round(+supply * 100) / 100

  const isPercentDown = changePercentRounded < 0

  return (
    <tr className="coin-table__row" onClick={() => navigate(`coins/${id}`)}>
      <td
        onClick={(e) => {
          e.stopPropagation()
          console.log('hello')
        }}
        className="coin-table__element coin-table__element_align-center coin-table__element_add"
      >
        +
      </td>
      <td className="coin-table__element coin-table__element_align-left">{rank}</td>
      <td className="coin-table__element coin-table__element_align-left">
        <div className="coin-table__element-names">
          <p className="coin-table__element-name">{name}</p>
          <p className="coin-table__element-symbol">{symbol}</p>
        </div>
      </td>
      <td className="coin-table__element">
        $ {priceUSDRounded}
      </td>
      <td className={`coin-table__element coin-table__element_${isPercentDown ? 'red' : 'green'}`}>
        {isPercentDown || '+'}{changePercentRounded}%
      </td>
      <td className="coin-table__element">
        $ {marketCapRounded}
      </td>
      <td className="coin-table__element">
        $ {volumeRounded}
      </td>
      <td className="coin-table__element">
        {supplyRounded} {symbol}
      </td>
    </tr>
  )
}

export default CoinTableRow
