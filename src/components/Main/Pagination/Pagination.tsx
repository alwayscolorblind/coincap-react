import React, { FC } from 'react'

import { useNavigate, useSearchParams } from 'react-router-dom'

import './styles.scss'

type PaginationProps = {
  lastPage: number,
}

const Pagination: FC<PaginationProps> = ({
  lastPage,
}) => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const currentPage = +(searchParams.get('page') || 1)

  const handleNext = () => {
    navigate(`/?page=${currentPage + 1}`)
  }

  const handlePrev = () => {
    if (currentPage - 1 === 1) {
      return navigate('/')
    }
    navigate(`/?page=${currentPage - 1}`)
  }

  const handleGoToFirst = () => {
    navigate('/')
  }

  const handleGoToLast = () => {
    navigate(`/?page=${lastPage}`)
  }

  return (
    <div className="pagination">
      <button
        className="pagination__button"
        onClick={handleGoToFirst}
        disabled={currentPage === 1}
      >
        {'<<'}
      </button>
      <button
        className="pagination__button"
        onClick={handlePrev}
        disabled={currentPage === 1}
      >
        {'<'}
      </button>
      <div>{currentPage}</div>
      <button
        className="pagination__button"
        onClick={handleNext}
        disabled={currentPage === lastPage}
      >
        {'>'}
      </button>
      <button
        className="pagination__button"
        onClick={handleGoToLast}
        disabled={currentPage === lastPage}
      >
        {'>>'}
      </button>
    </div>
  )
}

export default Pagination
