import React from "react"
import { nextPage, prevPage } from "../store/tabelSlice"
import { useDispatch } from "react-redux"

const Pagination = ({ totalPages, currentPage }) => {
  const dispatch = useDispatch()

  return (
    <div className="flex justify-end items-center gap-4 mt-4">
      <button
        onClick={() => dispatch(prevPage())}
        disabled={currentPage === 1}
        className="px-3 py-1 border rounded hover:bg-primary duration-500 ease-in-out hover:text-white"
      >
        Previous
      </button>

      <span className="text-textPrimary text-xl">{currentPage}</span>

      <button
        onClick={() => dispatch(nextPage())}
        disabled={currentPage === totalPages}
        className="px-3 py-1 border rounded hover:bg-primary duration-500 ease-in-out hover:text-white"
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
