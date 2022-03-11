import React, { FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Modal from '../Modal/Modal'
import { RootState } from '../../store'
import { closeUserCoinsModal } from '../../store/slices/user'

import CoinElement from './CoinElement'

import './styles.scss'

const UserCoinsModal: FC = () => {
  const user = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()

  const coinsKeys = Object.keys(user.coins)

  return (
    <Modal
      shown={user.userCoinsShown}
      title="Coins"
      onClose={() => dispatch(closeUserCoinsModal())}
    >
      {!coinsKeys.length && (
        <h2>Yoh don't have coins yet...</h2>
      )}

      {!!coinsKeys.length && (
        <div className="user-modal__container">
          {coinsKeys.map(coinKey => {
            return (
              <CoinElement
                key={coinKey}
                name={coinKey}
              />
            )
          })}
        </div>
      )}
    </Modal>
  )
}

export default UserCoinsModal
