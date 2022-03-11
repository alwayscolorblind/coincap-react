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
    navigate(`/coincap-react?page=${currentPage + 1}`)
  }

  const handlePrev = () => {
    if (currentPage - 1 === 1) {
      return navigate('/coincap-react')
    }
    navigate(`/coincap-react?page=${currentPage - 1}`)
  }

  const handleGoToFirst = () => {
    navigate('/coincap-react')
  }

  const handleGoToLast = () => {
    navigate(`/coincap-react?page=${lastPage}`)
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
