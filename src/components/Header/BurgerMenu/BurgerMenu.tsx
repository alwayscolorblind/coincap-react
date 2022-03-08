import React, { FC, useState } from 'react'

import './styles.scss'

type BurgerMenuProps = {
  onClick: () => void
}

const BurgerMenu: FC<BurgerMenuProps> = ({ onClick }) => {
  const [active, setActive] = useState(false)

  return (
    <div
      className="burger-menu"
      onClick={() => {
        setActive(prevState => !prevState)
        onClick()
      }}
    >
      <span className={`burger-menu__element${active ? ' burger-menu__element-top_active' : ''}`}/>
      <span className={`burger-menu__element${active ? ' burger-menu__element-center_active' : ''}`}/>
      <span className={`burger-menu__element${active ? ' burger-menu__element-bottom_active' : ''}`}/>
    </div>
  )
}

export default BurgerMenu
