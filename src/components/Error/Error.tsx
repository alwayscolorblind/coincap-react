import React, { FC } from 'react'

import Container from '../Container'

import './style.scss'

const Error: FC = () => {
  return (
    <div className="error">
      <Container>
        <div className="error__content">
          <h1>
            Loading... Wait a second
          </h1>
        </div>
      </Container>
    </div>
  )
}

export default Error