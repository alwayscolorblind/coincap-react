import React, { FC } from 'react'

import { COINS_PER_PAGE, MAX_LIMIT } from '../../constants/constants'
import AddModal from '../AddModal'
import Container from '../Container'

import CoinTable from './CoinTable'
import Pagination from './Pagination'

import './styles.scss'


const Main: FC = () => {
  return (
    <div className="main">
      <Container>
        <div className="main__body">
          <CoinTable />
          <Pagination lastPage={MAX_LIMIT / COINS_PER_PAGE}/>
          <AddModal />
        </div>
      </Container>
    </div>
  )
}

export default Main
