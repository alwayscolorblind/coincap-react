import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  calculateUserAccount,
  closeUserCoinsModal,
  removeCoin,
} from '../../../store/slices/user'
import { RootState } from '../../../store'

import './styles.scss'

type CoinElementProps = {
  name: string,
}

const CoinElement: FC<CoinElementProps> = ({ name }) => {
  const dispatch = useDispatch()
  const coins = useSelector((state: RootState) => state.user.coins)

  const handleRemove = () => {
    const tempCoins = { ...coins }

    if (tempCoins[name]) {
      delete tempCoins[name]
    }

    dispatch(removeCoin(name))
    dispatch(calculateUserAccount({ coins: tempCoins, force: true }))
    dispatch(closeUserCoinsModal())
  }

  return (
    <div className="coin-element">
      <div className="coin-element__content">
        <h4 className="coin-element__name">{name}</h4>
        <p className="coin-element__count">{coins[name]}</p>
      </div>

      <button
        className="coin-element__remove"
        onClick={handleRemove}
      >
        Remove
      </button>
    </div>
  )
}

export default CoinElement
