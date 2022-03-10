import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Provider } from 'react-redux'

import './index.css'
import App from './App'
import CoinInfo from './components/CoinInfo'
import Main from './components/Main'
import { store } from './store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="" element={<Main />} />
            <Route path="coins" element={<Navigate to="/" />} />
            <Route path="coins/:coinId" element={<CoinInfo />} />
            <Route path="*" element={<>Ooops!!!!!!</>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
