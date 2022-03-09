import React, { FC } from 'react'

import Container from '../Container'

import './style.scss'

const Loading: FC = () => {
  return (
    <div className="loading">
      <Container>
        <div className="loading__content">
          <h1>
            Loading... Wait a second
          </h1>
        </div>
      </Container>
    </div>
  )
}

export default Loading
