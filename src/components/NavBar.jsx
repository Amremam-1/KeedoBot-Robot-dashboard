import { ChevronDown, User } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

import {
  getItem,
  deleteToken,
  removeItem,
} from "../utils/storage"
import { PanelRightOpen } from "lucide-react"

const NavBar = ({ onClick }) => {
  const [openMenu, setOpenMenu] =
    useState(false)

  const user = getItem("user")

  const navigate = useNavigate()

  const handleLogout = () => {
    deleteToken()

    removeItem("user")

    navigate("/login")
  }

  return (
    <div className="h-16 flex items-center justify-between px-6 border-b border-borderColor bg-card text-textPrimary relative">
      {/* left */}

      <div className="flex items-center">
     
        <PanelRightOpen
          size={23}
          strokeWidth={2}
          className="cursor-pointer text-textPrimary hover:text-primary transition"
          onClick={onClick}
        />

        <h1 className="ms-3 font-semibold text-xl">
          Dashboard
        </h1>
      </div>

      {/* right */}

      <div className="flex items-center relative">
        {/* Avatar */}

        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-orange-400 flex items-center justify-center shadow-md">
          <User
            size={22}
            className="text-white"
          />
        </div>

        {/* User Info */}

        <div
          onClick={() =>
            setOpenMenu(!openMenu)
          }
          className="flex items-center ms-3 gap-1 cursor-pointer select-none"
        >
          <div className="flex flex-col leading-tight">
            <h3 className="text-sm font-semibold text-textPrimary">
              {user?.name || "Admin"}
            </h3>

            <p className="text-xs text-textSecondary">
              {user?.email || "admin@gmail.com"}
            </p>
          </div>

          <ChevronDown
            size={18}
            className={`text-textSecondary transition-transform duration-300 ${
              openMenu
                ? "rotate-180"
                : ""
            }`}
          />
        </div>

        {/* dropdown */}

        {openMenu && (
          <div className="absolute right-0 top-14 w-56 bg-card border border-borderColor rounded-2xl shadow-xl p-2 z-50">
            {/* User Info */}

            <div className="px-3 py-3 border-b border-borderColor">
              <h4 className="font-semibold text-sm text-textPrimary">
                {user?.name || "Admin"}
              </h4>

              <p className="text-xs text-textSecondary mt-1">
                {user?.email}
              </p>
            </div>

            {/* Menu Items */}

            <div className="py-2">
              <button
                onClick={() =>
                  navigate("/profile")
                }
                className="w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-hover transition"
              >
                Profile
              </button>

              <button
                onClick={() =>
                  navigate("/settings")
                }
                className="w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-hover transition"
              >
                Settings
              </button>

              <button
                onClick={handleLogout}
                className="w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-red-50 transition text-red-500"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavBar