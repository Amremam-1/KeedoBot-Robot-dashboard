import { useDispatch, useSelector } from "react-redux"
import { setSearchTerm } from "../store/tabelSlice"

const SearchBtn = () => {
  const dispatch = useDispatch()
  const searchTerm = useSelector((state) => state.table.searchTerm)
  return (
    <input
      type="text"
      placeholder="Search users..."
      value={searchTerm}
      onChange={(e) => dispatch(setSearchTerm(e.target.value))}
      className="border border-borderColor p-2 rounded-md focus:outline-none w-[50%]"
    />
  )
}

export default SearchBtn
