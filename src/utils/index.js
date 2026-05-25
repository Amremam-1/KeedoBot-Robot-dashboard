import jsPDF from "jspdf"
import autoTable from "jspdf-autotable"
import * as XLSX from "xlsx"

export const downloadExcel = (data) => {
  const worksheet = XLSX.utils.json_to_sheet(data)

  const workbook = XLSX.utils.book_new()

  XLSX.utils.book_append_sheet(workbook, worksheet, "Users")

  XLSX.writeFile(workbook, "users-table.xlsx")
}

export const downloadPDF = (data) => {
  const doc = new jsPDF()

  const columns = ["Name", "Email", "Phone", "Sales"]

  const rows = data.map((user) => [
    user.name,
    user.email,
    user.phone,
    user.sales,
  ])

  autoTable(doc, {
    head: [columns],
    body: rows,
  })

  doc.save("users-table.pdf")
}
