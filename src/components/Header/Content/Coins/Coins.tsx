import React, { FC } from 'react'

import Coin from '../Coin'

import './styles.scss'

const mocks = [
  {"id":"bitcoin","rank":"1","symbol":"BTC","name":"Bitcoin","supply":"18977318.0000000000000000","maxSupply":"21000000.0000000000000000","marketCapUsd":"732770607572.8433023771838288","volumeUsd24Hr":"14206077122.7799525186996010","priceUsd":"38612.9698397235743416","changePercent24Hr":"1.4679347497751969","vwap24Hr":"38625.4365994094916292","explorer":"https://blockchain.info/"},
  {"id":"ethereum","rank":"2","symbol":"ETH","name":"Ethereum","supply":"119871434.9990000000000000","maxSupply":null,"marketCapUsd":"304509898433.5905838434484903","volumeUsd24Hr":"8971890275.3847361912763890","priceUsd":"2540.3041052785502063","changePercent24Hr":"0.4916389594620374","vwap24Hr":"2536.2012884307073811","explorer":"https://etherscan.io/"},
  {"id":"tether","rank":"3","symbol":"USDT","name":"Tether","supply":"80029556459.0952900000000000","maxSupply":null,"marketCapUsd":"80113160222.7938148427764161","volumeUsd24Hr":"28560044964.1224618578924313","priceUsd":"1.0010446610901968","changePercent24Hr":"-0.0213534896681520","vwap24Hr":"1.0008310532761223","explorer":"https://www.omniexplorer.info/asset/31"}
]

const Coins: FC = () => {
  return (
    <div className="header__coins">
      {mocks.map(({ symbol, priceUsd, changePercent24Hr }) => (
        <Coin
          key={symbol}
          symbol={symbol}
          priceUSD={priceUsd}
          changePercent={changePercent24Hr}
        />
      ))}
    </div>
  )
}

export default Coins
