import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Container from '../Container'
import MainInformation from './MainInformation'
import { fetchCoinInfo } from '../../store/slices/coin'
import { RootState } from '../../store'
import { useParams } from 'react-router-dom'
import Loading from '../Loading'
import Error from '../Error'

type RouteParams = {
  coinId: string,
}

const CoinInfo: FC = () => {
  const params = useParams<RouteParams>()

  const coin = useSelector((state: RootState) => state.coin)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCoinInfo(params.coinId || ''))
  },[dispatch])

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
      </Container>
    </div>
  )
}

export default CoinInfo
