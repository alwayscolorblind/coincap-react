import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { toggleMenu } from '../../../store/slices/ui';
import { RootState } from '../../../store';

import './styles.scss'

const BurgerMenu: FC = () => {
  const ui = useSelector((state: RootState) => state.ui)
  const dispatch = useDispatch()

  return (
    <div
      className="burger-menu"
      onClick={() => dispatch(toggleMenu())}
    >
      <span className={`burger-menu__element${ui.menuShown ? ' burger-menu__element-top_active' : ''}`}/>
      <span className={`burger-menu__element${ui.menuShown ? ' burger-menu__element-center_active' : ''}`}/>
      <span className={`burger-menu__element${ui.menuShown ? ' burger-menu__element-bottom_active' : ''}`}/>
    </div>
  )
}

export default BurgerMenu
