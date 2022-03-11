import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import Container from '../Container'
import { fetchCoinInfo } from '../../store/slices/coin'
import { RootState } from '../../store'
import Loading from '../Loading'
import Error from '../Error'
import AddModal from '../AddModal'

import MainInformation from './MainInformation'
import CoinChart from './CoinChart';

type RouteParams = {
  coinId: string,
}

const CoinInfo: FC = () => {
  const params = useParams<RouteParams>()

  const coin = useSelector((state: RootState) => state.coin)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCoinInfo(params.coinId || ''))
  },[dispatch, params])

  if (coin.loading) {
    return <Loading />
  }

  if (coin.error) {
    return <Error />
  }

  return (
    <div className="coin-info">
      <Container>
        <MainInformation coinInfo={coin.coin!} />
        <CoinChart />
        <AddModal />
      </Container>
    </div>
  )
}

export default CoinInfo
