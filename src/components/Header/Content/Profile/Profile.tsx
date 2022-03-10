import React, { FC } from 'react'
import { useSelector } from 'react-redux'

import BriefcaseSVG from '../../../../assets/svg/BriefcaseSVG'
import { RootState } from '../../../../store'

import "./styles.scss"

const Profile: FC = () => {
  const user = useSelector((state: RootState) => state.user)

  const accountRounded = Math.round(user.account * 100) / 100

  const accountDifference = user.account - user.previousAccount
  const accountDifferenceRounded = Math.round(accountDifference * 100) / 100

  const accountPercentage = (accountDifference / user.previousAccount * 100) || 0
  const accountPercentageRounded = Math.round(accountPercentage * 100) / 100

  const isAccountDown = user.previousAccount > user.account

  return (
    <div className="header__profile">
      <div className="header__profile-data">
        <p>{accountRounded}$</p>
        <p>{isAccountDown || '+'}{accountDifferenceRounded}$ ({accountPercentageRounded}%)</p>
      </div>

      <div className="header__profile-logo">
        <BriefcaseSVG width="25px" height="25px"/>
      </div>
    </div>
  )
}

export default Profile
