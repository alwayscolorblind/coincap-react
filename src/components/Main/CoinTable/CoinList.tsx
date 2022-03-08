import React, { FC } from 'react'

import CoinTableRow from './CoinTableRow'

import './styles.scss'

const mock = [{
  'id': 'bitcoin',
  'rank': '1',
  'symbol': 'BTC',
  'name': 'Bitcoin',
  'supply': '18977625.0000000000000000',
  'maxSupply': '21000000.0000000000000000',
  'marketCapUsd': '730934318997.5630998386057750',
  'volumeUsd24Hr': '14332829317.6717824060486061',
  'priceUsd': '38515.5844842314620422',
  'changePercent24Hr': '-1.5900838663698685',
  'vwap24Hr': '38642.9466306842327761',
  'explorer': 'https://blockchain.info/'
}, {
  'id': 'ethereum',
  'rank': '2',
  'symbol': 'ETH',
  'name': 'Ethereum',
  'supply': '119875906.6240000000000000',
  'maxSupply': null,
  'marketCapUsd': '305282636241.9964510681453375',
  'volumeUsd24Hr': '9153002003.8804253316935248',
  'priceUsd': '2546.6554943316417780',
  'changePercent24Hr': '-2.7937183939478241',
  'vwap24Hr': '2540.5159993140501403',
  'explorer': 'https://etherscan.io/'
}, {
  'id': 'tether',
  'rank': '3',
  'symbol': 'USDT',
  'name': 'Tether',
  'supply': '80029556459.0952900000000000',
  'maxSupply': null,
  'marketCapUsd': '80174715815.0605343099087314',
  'volumeUsd24Hr': '28224566541.4076251415682285',
  'priceUsd': '1.0018138218226842',
  'changePercent24Hr': '-0.0110090006189919',
  'vwap24Hr': '1.0005261450515692',
  'explorer': 'https://www.omniexplorer.info/asset/31'
}, {
  'id': 'binance-coin',
  'rank': '4',
  'symbol': 'BNB',
  'name': 'BNB',
  'supply': '166801148.0000000000000000',
  'maxSupply': '166801148.0000000000000000',
  'marketCapUsd': '63410550892.4397009332142568',
  'volumeUsd24Hr': '804605269.5848965899039666',
  'priceUsd': '380.1565615869724166',
  'changePercent24Hr': '-0.7120160202590606',
  'vwap24Hr': '380.5392271569698911',
  'explorer': 'https://etherscan.io/token/0xB8c77482e45F1F44dE1745F52C74426C631bDD52'
}, {
  'id': 'usd-coin',
  'rank': '5',
  'symbol': 'USDC',
  'name': 'USD Coin',
  'supply': '52581542465.2766200000000000',
  'maxSupply': null,
  'marketCapUsd': '52667567819.6729709236544112',
  'volumeUsd24Hr': '1717507605.3020558274444886',
  'priceUsd': '1.0016360371028134',
  'changePercent24Hr': '0.0451343068564774',
  'vwap24Hr': '1.0009471726516543',
  'explorer': 'https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
}, {
  'id': 'xrp',
  'rank': '6',
  'symbol': 'XRP',
  'name': 'XRP',
  'supply': '45404028640.0000000000000000',
  'maxSupply': '100000000000.0000000000000000',
  'marketCapUsd': '32661440054.5977403032084800',
  'volumeUsd24Hr': '1033048922.2476815991592122',
  'priceUsd': '0.7193511464272070',
  'changePercent24Hr': '-3.5570960315032956',
  'vwap24Hr': '0.7260422441526326',
  'explorer': 'https://xrpcharts.ripple.com/#/graph/'
}, {
  'id': 'terra-luna',
  'rank': '7',
  'symbol': 'LUNA',
  'name': 'Terra',
  'supply': '365243080.6888295000000000',
  'maxSupply': null,
  'marketCapUsd': '29463032840.5893180990289524',
  'volumeUsd24Hr': '852550305.7569563683311610',
  'priceUsd': '80.6669158113100098',
  'changePercent24Hr': '-2.8621181578431522',
  'vwap24Hr': '79.8383292863057579',
  'explorer': 'https://finder.terra.money/'
}, {
  'id': 'cardano',
  'rank': '8',
  'symbol': 'ADA',
  'name': 'Cardano',
  'supply': '33674396172.6810000000000000',
  'maxSupply': '45000000000.0000000000000000',
  'marketCapUsd': '26752636817.7272257706941858',
  'volumeUsd24Hr': '491953629.5961729281816327',
  'priceUsd': '0.7944503794675557',
  'changePercent24Hr': '-5.3122828790882125',
  'vwap24Hr': '0.8065790717041465',
  'explorer': 'https://cardanoexplorer.com/'
}, {
  'id': 'solana',
  'rank': '9',
  'symbol': 'SOL',
  'name': 'Solana',
  'supply': '318043972.7516683300000000',
  'maxSupply': null,
  'marketCapUsd': '26220787492.1106719528801392',
  'volumeUsd24Hr': '369624755.3503325235056483',
  'priceUsd': '82.4439063103519490',
  'changePercent24Hr': '-3.4746296534198823',
  'vwap24Hr': '83.2560367730838296',
  'explorer': 'https://explorer.solana.com/'
}, {
  'id': 'avalanche',
  'rank': '10',
  'symbol': 'AVAX',
  'name': 'Avalanche',
  'supply': '265787495.3864291300000000',
  'maxSupply': null,
  'marketCapUsd': '19136279412.6157956100163858',
  'volumeUsd24Hr': '659865576.0406951974106221',
  'priceUsd': '71.9984188300262556',
  'changePercent24Hr': '-4.3132155685515182',
  'vwap24Hr': '72.7293220183191446',
  'explorer': 'https://avascan.info/'
}, {
  'id': 'polkadot',
  'rank': '11',
  'symbol': 'DOT',
  'name': 'Polkadot',
  'supply': '1090937472.3775800000000000',
  'maxSupply': null,
  'marketCapUsd': '18263793209.2948601995106038',
  'volumeUsd24Hr': '377056175.9357063101204047',
  'priceUsd': '16.7413748924499789',
  'changePercent24Hr': '-1.1158994312452183',
  'vwap24Hr': '16.6412156207109259',
  'explorer': 'https://polkascan.io/polkadot'
}, {
  'id': 'binance-usd',
  'rank': '12',
  'symbol': 'BUSD',
  'name': 'Binance USD',
  'supply': '17977709260.0892560000000000',
  'maxSupply': null,
  'marketCapUsd': '18010229684.1146246765162539',
  'volumeUsd24Hr': '601764284.4883965620343235',
  'priceUsd': '1.0018089303567482',
  'changePercent24Hr': '-0.0281035076506955',
  'vwap24Hr': '1.0012372890007197',
  'explorer': 'https://etherscan.io/token/0x4Fabb145d64652a948d72533023f6E7A623C7C53'
}, {
  'id': 'dogecoin',
  'rank': '13',
  'symbol': 'DOGE',
  'name': 'Dogecoin',
  'supply': '132670764299.8940900000000000',
  'maxSupply': null,
  'marketCapUsd': '15460310657.8425609110186447',
  'volumeUsd24Hr': '206559291.9778339060397361',
  'priceUsd': '0.1165314056900696',
  'changePercent24Hr': '-4.0371035794423985',
  'vwap24Hr': '0.1182613793537415',
  'explorer': 'http://dogechain.info/chain/Dogecoin'
}, {
  'id': 'terrausd',
  'rank': '14',
  'symbol': 'UST',
  'name': 'TerraUSD',
  'supply': '13917150022.1375310000000000',
  'maxSupply': null,
  'marketCapUsd': '13966600494.6763995033483913',
  'volumeUsd24Hr': '124580478.9578590594414208',
  'priceUsd': '1.0035532039577219',
  'changePercent24Hr': '0.0061449281443268',
  'vwap24Hr': '1.0052202761235733',
  'explorer': 'https://finder.terra.money/'
}, {
  'id': 'shiba-inu',
  'rank': '15',
  'symbol': 'SHIB',
  'name': 'Shiba Inu',
  'supply': '549063278876301.9400000000000000',
  'maxSupply': null,
  'marketCapUsd': '12611901098.1510228835086246',
  'volumeUsd24Hr': '394379534.5786918936373211',
  'priceUsd': '0.0000229698498941',
  'changePercent24Hr': '-2.6866493949644051',
  'vwap24Hr': '0.0000230681317935',
  'explorer': 'https://etherscan.io/token/0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce'
}, {
  'id': 'polygon',
  'rank': '16',
  'symbol': 'MATIC',
  'name': 'Polygon',
  'supply': '7664713455.6200000000000000',
  'maxSupply': '10000000000.0000000000000000',
  'marketCapUsd': '10991065119.8353576055375037',
  'volumeUsd24Hr': '480338223.6732382054639752',
  'priceUsd': '1.4339825204784891',
  'changePercent24Hr': '-2.6517432030473312',
  'vwap24Hr': '1.4388578703989821',
  'explorer': 'https://etherscan.io/token/0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0'
}, {
  'id': 'wrapped-bitcoin',
  'rank': '17',
  'symbol': 'WBTC',
  'name': 'Wrapped Bitcoin',
  'supply': '269575.7983619400000000',
  'maxSupply': null,
  'marketCapUsd': '10372849145.5644038033236198',
  'volumeUsd24Hr': '99138971.8531065296609091',
  'priceUsd': '38478.4138954400004336',
  'changePercent24Hr': '-1.6154558787298083',
  'vwap24Hr': '38563.1065245905351525',
  'explorer': 'https://etherscan.io/token/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
}, {
  'id': 'multi-collateral-dai',
  'rank': '18',
  'symbol': 'DAI',
  'name': 'Multi Collateral DAI',
  'supply': '9902273737.7798200000000000',
  'maxSupply': null,
  'marketCapUsd': '9921024546.6665671011838411',
  'volumeUsd24Hr': '110898518.7723832006106616',
  'priceUsd': '1.0018935861988149',
  'changePercent24Hr': '-0.0289663293161953',
  'vwap24Hr': '1.0005582286839009',
  'explorer': 'https://etherscan.io/token/0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359'
}, {
  'id': 'crypto-com-coin',
  'rank': '19',
  'symbol': 'CRO',
  'name': 'Crypto.com Coin',
  'supply': '25263013692.0000000000000000',
  'maxSupply': '30263013692.0000000000000000',
  'marketCapUsd': '9723325686.4258765460058828',
  'volumeUsd24Hr': '63394856.0724500774328585',
  'priceUsd': '0.3848838386809309',
  'changePercent24Hr': '-3.1846403567275256',
  'vwap24Hr': '0.3845112757881021',
  'explorer': 'https://etherscan.io/token/0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b'
}, {
  'id': 'litecoin',
  'rank': '20',
  'symbol': 'LTC',
  'name': 'Litecoin',
  'supply': '69796781.2779146400000000',
  'maxSupply': '84000000.0000000000000000',
  'marketCapUsd': '6978117082.5478535422822998',
  'volumeUsd24Hr': '310090421.5873446736317240',
  'priceUsd': '99.9776344236076627',
  'changePercent24Hr': '-3.2150514214081269',
  'vwap24Hr': '100.2959599541944888',
  'explorer': 'http://explorer.litecoin.net/chain/Litecoin'
}, {
  'id': 'cosmos',
  'rank': '21',
  'symbol': 'ATOM',
  'name': 'Cosmos',
  'supply': '248453201.0000000000000000',
  'maxSupply': null,
  'marketCapUsd': '6899645940.8389670067546666',
  'volumeUsd24Hr': '610487430.0318191013619240',
  'priceUsd': '27.7704047002355466',
  'changePercent24Hr': '-5.0683640189703774',
  'vwap24Hr': '28.5250854394808415',
  'explorer': 'https://www.mintscan.io/'
}, {
  'id': 'near-protocol',
  'rank': '22',
  'symbol': 'NEAR',
  'name': 'NEAR Protocol',
  'supply': '644657021.0000000000000000',
  'maxSupply': '1000000000.0000000000000000',
  'marketCapUsd': '6257678302.6012053336097613',
  'volumeUsd24Hr': '216303495.0870500586670127',
  'priceUsd': '9.7069885206465553',
  'changePercent24Hr': '-4.4633044074808210',
  'vwap24Hr': '9.8162073693088117',
  'explorer': 'https://explorer.nearprotocol.com/'
}, {
  'id': 'tron',
  'rank': '23',
  'symbol': 'TRX',
  'name': 'TRON',
  'supply': '101722223496.8632200000000000',
  'maxSupply': null,
  'marketCapUsd': '6163874360.8183960073270630',
  'volumeUsd24Hr': '389390527.7508835163681527',
  'priceUsd': '0.0605951595327492',
  'changePercent24Hr': '0.4742938859316731',
  'vwap24Hr': '0.0599222279813053',
  'explorer': 'https://tronscan.org/#/'
}, {
  'id': 'chainlink',
  'rank': '24',
  'symbol': 'LINK',
  'name': 'Chainlink',
  'supply': '467009549.5205637000000000',
  'maxSupply': '1000000000.0000000000000000',
  'marketCapUsd': '6131035892.5491521752592533',
  'volumeUsd24Hr': '355772724.5049329257850539',
  'priceUsd': '13.1282880592984234',
  'changePercent24Hr': '-3.1326764772038387',
  'vwap24Hr': '13.0339833544820123',
  'explorer': 'https://etherscan.io/token/0x514910771af9ca656af840dff83e8264ecf986ca'
}, {
  'id': 'uniswap',
  'rank': '25',
  'symbol': 'UNI',
  'name': 'Uniswap',
  'supply': '687212083.0552139000000000',
  'maxSupply': '1000000000.0000000000000000',
  'marketCapUsd': '5910639036.1605835552989915',
  'volumeUsd24Hr': '106139448.7362152309342837',
  'priceUsd': '8.6008950975992874',
  'changePercent24Hr': '-2.0617722940114928',
  'vwap24Hr': '8.5077279412239735',
  'explorer': 'https://etherscan.io/token/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984'
}, {
  'id': 'ftx-token',
  'rank': '26',
  'symbol': 'FTT',
  'name': 'FTX Token',
  'supply': '137578069.7187437400000000',
  'maxSupply': '352170015.0000000000000000',
  'marketCapUsd': '5561832453.6382181807928250',
  'volumeUsd24Hr': '36789496.9455011225970239',
  'priceUsd': '40.4267370883200430',
  'changePercent24Hr': '-0.5723563146745396',
  'vwap24Hr': '40.2570713206097076',
  'explorer': 'https://etherscan.io/token/0x50d1c9771902476076ecfc8b2a83ad6b9355a4c9'
}, {
  'id': 'bitcoin-cash',
  'rank': '27',
  'symbol': 'BCH',
  'name': 'Bitcoin Cash',
  'supply': '19002675.0000000000000000',
  'maxSupply': '21000000.0000000000000000',
  'marketCapUsd': '5341057036.1549652327585600',
  'volumeUsd24Hr': '147207127.2456900802557524',
  'priceUsd': '281.0686935473540032',
  'changePercent24Hr': '-2.8586677036373280',
  'vwap24Hr': '280.7231362766185313',
  'explorer': 'https://blockchair.com/bitcoin-cash/blocks'
}, {
  'id': 'unus-sed-leo',
  'rank': '28',
  'symbol': 'LEO',
  'name': 'UNUS SED LEO',
  'supply': '953954130.0000000000000000',
  'maxSupply': null,
  'marketCapUsd': '5313359008.1074484034221760',
  'volumeUsd24Hr': '4326732.4592263074109176',
  'priceUsd': '5.5698265157753952',
  'changePercent24Hr': '2.8157281162953483',
  'vwap24Hr': '5.4796718233745624',
  'explorer': 'https://eospark.com/account/bitfinexleo1'
}, {
  'id': 'steth',
  'rank': '29',
  'symbol': 'STETH',
  'name': 'Lido stETH',
  'supply': '2014166.5987455900000000',
  'maxSupply': null,
  'marketCapUsd': '5113000611.3977834769788040',
  'volumeUsd24Hr': '1558175.8405887069609819',
  'priceUsd': '2538.5192141415349477',
  'changePercent24Hr': '-0.9040690591177237',
  'vwap24Hr': '2527.1333662479750522',
  'explorer': 'https://etherscan.io/token/0xae7ab96520de3a18e5e111b5eaab095312d7fe84'
}, {
  'id': 'algorand',
  'rank': '30',
  'symbol': 'ALGO',
  'name': 'Algorand',
  'supply': '6624987631.0056350000000000',
  'maxSupply': '10000000000.0000000000000000',
  'marketCapUsd': '4890278294.3750446795557662',
  'volumeUsd24Hr': '88988763.8767928507047195',
  'priceUsd': '0.7381565923969474',
  'changePercent24Hr': '-3.0976615562179504',
  'vwap24Hr': '0.7400803321175995',
  'explorer': 'https://algoexplorer.io/'
}]

type CoinTableProps = {}

const CoinTable: FC<CoinTableProps> = () => {
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
        mock.map(coin => (
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
