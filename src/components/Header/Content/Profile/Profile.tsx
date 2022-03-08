import React, { FC } from 'react'

import BriefcaseSVG from '../../../../assets/svg/BriefcaseSVG'

import "./styles.scss"

type ProfileProps = {

};

const mock = {
  account: 41,
  previousAccount: 124124,
}

const Profile: FC<ProfileProps> = () => {
  const accountDifference = mock.account - mock.previousAccount
  const accountDifferenceRounded = Math.round(accountDifference * 100) / 100

  const accountPercentage = accountDifference / mock.previousAccount * 100
  const accountPercentageRounded = Math.round(accountPercentage * 100) / 100

  const isAccountDown = mock.previousAccount > mock.account

  return (
    <div className="header__profile">
      <div className="header__profile-data">
        <p>{mock.account}$</p>
        <p>{isAccountDown || '+'}{accountDifferenceRounded}$ ({accountPercentageRounded}%)</p>
      </div>

      <div className="header__profile-logo">
        <BriefcaseSVG width="25px" height="25px"/>
      </div>
    </div>
  )
}

export default Profile
