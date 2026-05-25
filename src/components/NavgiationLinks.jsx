import { IoMdPerson } from "react-icons/io"
import { MdOutlineInfo } from "react-icons/md"
import { NavLink } from "react-router-dom"

const navLinks = [
  {
    id: 1,
    title: "Dashboard",
    path: "/dashboard",
    icon: IoMdPerson,
  },

  {
    id: 2,
    title: "Users",
    path: "/dashboard/users",
    icon: MdOutlineInfo,
  },
]

const NavgiationLinks = () => {
  return (
    <nav className="flex flex-col gap-2">
      {navLinks.map((item) => (
        <NavLink
          key={item.id}
          to={item.path}
          end={item.path === "/dashboard"}
          className={({ isActive }) =>
            `
            group relative
            flex items-center
            px-3 py-3
            rounded-2xl
            overflow-hidden
            transition-all duration-300 ease-in-out

            ${
              isActive
                ? `
                  bg-gradient-to-r from-primary to-primaryHover
                  text-white
                  shadow-soft
                `
                : `
                  text-textSecondary
                  hover:bg-hover
                  hover:text-primary
                `
            }
          `
          }
        >
          {({ isActive }) => (
            <>
              {/* Active Glow */}

              {isActive && (
                <div className="absolute right-2 w-2 h-2 rounded-full bg-white shadow-md"></div>
              )}

              {/* Icon */}

              <div
                className={`
                  flex items-center justify-center
                  min-w-[42px] h-[42px]
                  rounded-xl
                  transition-all duration-300

                  ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-hover text-primary group-hover:bg-white"
                  }
                `}
              >
                <item.icon className="text-[20px]" />
              </div>

              {/* Text */}

              <div className="ms-3 hidden md:block">
                <h3
                  className={`
                    text-sm font-semibold transition-all duration-300

                    ${
                      isActive
                        ? "text-white"
                        : "text-textPrimary"
                    }
                  `}
                >
                  {item.title}
                </h3>

                <p
                  className={`
                    text-[11px]

                    ${
                      isActive
                        ? "text-white/70"
                        : "text-textSecondary"
                    }
                  `}
                >
                  Manage {item.title}
                </p>
              </div>

              {/* Hover Border */}

              {!isActive && (
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-borderColor transition-all duration-300"></div>
              )}
            </>
          )}
        </NavLink>
      ))}
    </nav>
  )
}

export default NavgiationLinks