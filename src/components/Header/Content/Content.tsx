import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../../store'
import { closeMenu } from '../../../store/slices/ui'
import HomeSVG from '../../../assets/svg/HomeSVG'

import Coins from './Coins'
import Profile from './Profile'

import './styles.scss'

const Content: FC = () => {
  const ui = useSelector((state: RootState) => state.ui)
  const dispatch = useDispatch()

  return (
    <div className={`header__content${ui.menuShown ? ' header__content_active' : ''}`}>
      <Link
        to="/coincap-react"
        className="header__content__link"
        onClick={() => dispatch(closeMenu())}
      >
        <HomeSVG width="25px" height="25px" />
      </Link>
      <Coins />
      <Profile />
    </div>
  )
}

export default Content
