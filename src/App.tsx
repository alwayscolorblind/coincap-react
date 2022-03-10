import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Header from './components/Header'
import { RootState } from './store'
import { calculateUserAccount, setUserDataFromStorage } from './store/slices/user'
import Loading from './components/Loading'
import Error from './components/Error'
import { UserStorageType } from './interfaces/user'

function App() {
  const user = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    const userDataFromStorage = localStorage.getItem('user')
    const userData: UserStorageType = userDataFromStorage ? JSON.parse(localStorage.getItem('user')!) : {}

    dispatch(calculateUserAccount({ coins: userData.coins }))
    dispatch(setUserDataFromStorage(userData))
  }, [])


  useEffect(() => {
    const userJson = JSON.stringify({
      previousAccount: user.previousAccount,
      coins: user.coins,
    })

    localStorage.setItem('user', userJson)
  }, [user])

  if (user.loading) {
    return <Loading />
  }

  if (user.error) {
    return <Error />
  }

  return (
      <>
        <Header />
        <Outlet />
      </>
  );
}

export default App;
