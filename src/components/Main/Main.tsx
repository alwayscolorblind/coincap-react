import React, { FC } from 'react'

import Container from '../Container'
import CoinTable from './CoinTable'

import './styles.scss'
import Pagination from './Pagination'

import { COINS_PER_PAGE, MAX_LIMIT } from '../../constants/constants'

type MainProps = {

}

const Main: FC<MainProps> = () => {
  return (
    <div className="main">
      <Container>
        <div className="main__body">
          <CoinTable />
          <Pagination lastPage={MAX_LIMIT / COINS_PER_PAGE}/>
        </div>
      </Container>
    </div>
  )
}

export default Main
