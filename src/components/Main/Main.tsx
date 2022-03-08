import React, { FC } from 'react'

import Container from '../Container'
import CoinTable from './CoinTable'

import './styles.scss'
import Pagination from './Pagination'

type MainProps = {

}

const Main: FC<MainProps> = () => {
  return (
    <div className="main">
      <Container>
        <div className="main__body">
          <CoinTable />
          <Pagination lastPage={20}/>
        </div>
      </Container>
    </div>
  )
}

export default Main
