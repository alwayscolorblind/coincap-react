import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import Coins from './Coins'
import Profile from './Profile'
import HomeSVG from '../../../assets/svg/HomeSVG'

import './styles.scss'

type ContentProps = {
  visible: boolean,
}

const Content: FC<ContentProps> = ({ visible }) => {
  return (
    <div className={`header__content${visible ? ' header__content_active' : ''}`}>
      <Link to="/" className="header__content__link">
        <HomeSVG width="25px" height="25px" />
      </Link>
      <Coins />
      <Profile />
    </div>
  )
}

export default Content
