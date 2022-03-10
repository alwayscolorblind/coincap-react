import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Modal from '../Modal/Modal'

import { RootState } from '../../store'
import { addCoin, closeAddModal, calculateUserAccount } from '../../store/slices/user'

import './styles.scss'

const AddModal: FC = () => {
  const [count, setCount] = useState('')
  const [inputError, setInputError] = useState(false)

  const tempCoin = useSelector((state: RootState) => state.coin.tempCoin)
  const user = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    setCount('')
    setInputError(false)
  }, [user.addShown])


  const handleAddButton = () => {
    if (!isFinite(+count) || +count < 0) {
      return setInputError(true)
    }

    if (!tempCoin?.id) {
      return dispatch(closeAddModal())
    }

    dispatch(addCoin({ coinId: tempCoin.id, count: +count}))

    const tempUserCoins = { ...user.coins }

    if (tempUserCoins[tempCoin.id]) {
      tempUserCoins[tempCoin.id] += +count
    } else {
      tempUserCoins[tempCoin.id] = +count
    }

    dispatch(calculateUserAccount({ coins: tempUserCoins, force: true }))
    dispatch(closeAddModal())
  }

  return (
    <Modal
      shown={user.addShown}
      title={`Add ${tempCoin?.name}`}
      onClose={() => dispatch(closeAddModal())}
    >
      {inputError && <p className="add-modal__error">Value is invalid</p>}
      <p>Enter count:</p>
      <input
        className="add-modal__input"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <button
        className="add-modal__button"
        onClick={handleAddButton}
      >
        Add to account
      </button>
    </Modal>
  )
}

export default AddModal
