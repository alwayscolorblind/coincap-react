import React, { FC } from 'react'

import './styles.scss'

type ModalContainerProps = {
  shown: boolean,
  title: string,
  onClose: () => void,
}

const ModalContainer: FC<ModalContainerProps> = ({
  shown,
  title,
  onClose,
  children
}) => {
  if (!shown) {
    return null
  }

  return (
    <div
      className="modal"
      onClick={onClose}
    >
      <div
        className="modal__container"
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <div className="modal__header">
          <h2 className="modal__title">{title}</h2>
          <button
            className="modal__close"
            onClick={onClose}
          >
            Close
          </button>
        </div>

        <div className="modal__content">
          {children}
        </div>
      </div>
    </div>
  )
}

export default ModalContainer
