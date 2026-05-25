import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import { useState } from "react"
import DesktopSidebar from "../components/DesktopSidebar"
import MobileSidebar from "../components/MobileSidebar"

const DashboardLayout = () => {
  const [openSidebar, setOpenSidebar] = useState(true)

  const handleClick = () => {
    setOpenSidebar(!openSidebar)
  }

  return (
    <div className="min-h-screen bg-background text-textPrimary">
      <div className="hidden md:block">
        <DesktopSidebar openSidebar={openSidebar} />
      </div>

      <div className="block md:hidden">
        <MobileSidebar openSidebar={openSidebar} />
      </div>

      <div
        className={`
        flex flex-col transition-all duration-300
        ${openSidebar ? "ml-12 md:ml-72" : "ml-0"}       
      `}
      >
        <NavBar onClick={handleClick} />

        <main className="flex-1 p-6 w-full bg-card">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
