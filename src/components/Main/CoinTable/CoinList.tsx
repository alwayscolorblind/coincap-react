import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchCoinsPerPage } from '../../../store/slices/coins'
import { RootState } from '../../../store'
import Loading from '../../Loading'
import Error from '../../Error'

import CoinTableRow from './CoinTableRow'
import './styles.scss'
import { useSearchParams } from 'react-router-dom'

const CoinTable: FC = () => {
  const [searchParams] = useSearchParams()

  const coins = useSelector((state: RootState) => state.coins)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCoinsPerPage(+(searchParams.get('page') || 1)))
  }, [dispatch, searchParams])

  if (coins.loading) {
    return <Loading />
  }

  if (coins.error) {
    return <Error />
  }

  return (
    <table className="coin-table">
      <thead>
      <tr>
        <th className="coin-table__heading coin-table__heading_sticky-left"/>
        <th className="coin-table__heading coin-table__heading_align-left">#</th>
        <th className="coin-table__heading coin-table__heading_align-left">Name</th>
        <th className="coin-table__heading">Price</th>
        <th className="coin-table__heading">24h %</th>
        <th className="coin-table__heading">Market Cap</th>
        <th className="coin-table__heading">Volume</th>
        <th className="coin-table__heading">Circulating supply</th>
      </tr>
      </thead>

      <tbody>
      {
        coins.coins.map(coin => (
          <CoinTableRow
            key={coin.id}
            coin={ coin }
          />
        ))
      }
      </tbody>
    </table>
  )
}

export default CoinTable
