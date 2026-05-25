import { downloadExcel, downloadPDF } from "../utils"

const ButtonActions = ({ filteredUsers }) => {
  return (
    <div className="flex gap-3 py-3">
      <button
        onClick={() => downloadPDF(filteredUsers)}
        className="flex items-center gap-2 px-3 py-2 bg-primary text-white rounded-lg"
      >
        Download PDF
      </button>

      <button
        onClick={() => downloadExcel(filteredUsers)}
        className="flex items-center gap-2 px-3 py-2 bg-green-600 text-white rounded-lg"
      >
        Download Excel
      </button>
    </div>
  )
}

export default ButtonActions
