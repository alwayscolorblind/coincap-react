import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../../../store'
import { fetchFirstThreeCoins } from '../../../../store/slices/topCoins'

import Coin from './Coin'

import './styles.scss'

const Coins: FC = () => {
  const topCoins = useSelector((state: RootState) => state.topCoins)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchFirstThreeCoins())
  }, [])

  if (topCoins.loading || topCoins.error) {
    return null
  }

  return (
    <div className="header__coins">
      {topCoins.topCoins.map(({ symbol, priceUsd, changePercent24Hr }) => (
        <Coin
          key={symbol}
          symbol={symbol}
          priceUSD={priceUsd}
          changePercent={changePercent24Hr}
        />
      ))}
    </div>
  )
}

export default Coins
