import React, { FC } from 'react'

import Container from '../Container'
import UserCoinsModal from '../UserCoinsModal'

import BurgerMenu from './BurgerMenu'
import Content from './Content'

import './styles.scss'

const Header: FC = () => {
  return (
    <div className="header">
      <Container>
        <div className="header__body">
          <Content />
          <BurgerMenu />
          <UserCoinsModal />
        </div>
      </Container>
    </div>
  )
}

export default Header
