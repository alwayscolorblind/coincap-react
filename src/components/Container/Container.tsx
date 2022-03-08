import React, { FC } from 'react'

import "./styles.scss"

const Container: FC = ({ children }) => {
  return (
    <div className="container">
      {children}
    </div>
  )
}

export default Container
