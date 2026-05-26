import { useSelector } from "react-redux"
import SearchBtn from "../../components/SearchBtn"
import { dashboardData } from "../../data/index"
import Pagination from "../../components/Pagination"
import ButtonActions from "../../components/ButtonActions"
import Tabel from "../../components/Tabel"
import { useGetAllUsers } from "../../hook/useGetAllUsers"

const TableUser = () => {
  const searchTerm = useSelector((state) => state.table.searchTerm)
  const rowsPerPage = useSelector((state) => state.table.rowsPerPage)
  const currentPage = useSelector((state) => state.table.currentPage) 

const {data , isLoading} =   useGetAllUsers()

const users = data?.data || []

  const filteredUsers = users.filter((user) =>
    `${user.name} ${user.email} ${user.phone}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  )


  const startIndex = (currentPage - 1) * rowsPerPage // (1 - 1) * 2 => 0
  const endIndex = startIndex + rowsPerPage // 0 + 2 => 2

  const currentUsers = filteredUsers.slice(startIndex, endIndex) 
  const totalPages = Math.ceil(filteredUsers.length / rowsPerPage)





  return (
    <div className="bg-background p-2 md:p-6 rounded-xl shadow space-y-4">
      {/* Search */}
      <SearchBtn />

      {/* Table */}
      <div className="overflow-x-auto">
        <Tabel currentUsers={currentUsers} isLoading={isLoading}/>
        <ButtonActions filteredUsers={filteredUsers} />
      </div>

      {/* Pagination */}
      <Pagination totalPages={totalPages} currentPage={currentPage}/>
    </div>
  )
}

export default TableUser
