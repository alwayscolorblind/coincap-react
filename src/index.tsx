import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import CoinInfo from './components/CoinInfo'
import Main from './components/Main'

ReactDOM.render(
  <React.StrictMode>
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
  </React.StrictMode>,
  document.getElementById('root')
)
