import React, { FC, useState } from 'react'

import Content from './Content'
import Container from '../Container'

import './styles.scss'
import BurgerMenu from './BurgerMenu'



const Header: FC = () => {
  const [menuVisible, setMenuVisible] = useState(false)

  return (
    <div className="header">
      <Container>
        <div className="header__body">
          <Content visible={menuVisible} />
          <BurgerMenu onClick={() => setMenuVisible(prevState => !prevState)} />
        </div>
      </Container>
    </div>
  )
}

export default Header
