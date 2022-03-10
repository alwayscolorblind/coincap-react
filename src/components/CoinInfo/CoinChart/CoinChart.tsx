import React, {
  FC,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useSelector } from 'react-redux'

import {
  LineChart,
  Line,
  Tooltip,
  YAxis,
  XAxis,
  CartesianGrid,
  Legend,
} from 'recharts'

import { RootState } from '../../../store'

type CoinChartProps = {

};

const initialSize = {
  width: 200,
  height: 300,
}

export const CoinChart: FC<CoinChartProps> = () => {
  const [size, setSize] = useState(initialSize)

  const coinInfo = useSelector((state: RootState) => state.coin)

  const ref: any = useRef()

  const observer = useRef(
    new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      setSize({
        width,
        height,
      })
    })
  );

  useEffect(() => {
    observer.current.observe(ref.current)
  }, [ref, observer])

  return (
    <div ref={ref}>
      <LineChart
        width={size.width}
        height={size.height}
        margin={{ top: 32, bottom: 32 }}
        data={coinInfo.coinHistory}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <YAxis/>
        <XAxis dataKey="date"/>
        <Line
          type="monotone"
          dataKey="priceUsd"
          stroke="#8884d8"
        />
        <Tooltip/>
        <Legend />
      </LineChart>
    </div>
  );
};
