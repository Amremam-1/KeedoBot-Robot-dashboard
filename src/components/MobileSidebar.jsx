import NavgiationLinks from "./NavgiationLinks"

const MobileSidebar = ({
  openSidebar,
}) => {
  return (
    <aside
      className={`
        fixed top-0 left-0 z-50
        h-screen w-16
        bg-card/95 backdrop-blur-xl
        border-r border-borderColor
        shadow-soft
        text-textPrimary
        transition-transform duration-300 ease-in-out
        ${
          openSidebar
            ? "translate-x-0"
            : "-translate-x-full"
        }
      `}
    >
      {/* Header */}

      <div className="relative h-16 flex items-center justify-center border-b border-borderColor overflow-hidden">
        {/* Glow */}

        <div className="absolute -top-8 -right-8 w-20 h-20 bg-primary/10 rounded-full blur-2xl"></div>

        {/* Logo */}

        <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-br from-primary to-primaryHover p-[1px] shadow-soft">
          <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center overflow-hidden">
            <img
              src="/logo.png"
              alt="logo"
              loading="lazy"
              className="w-7 h-7 object-contain"
            />
          </div>
        </div>

        {/* Status */}

        <div className="absolute bottom-2 right-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-online opacity-75"></span>

            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-online border border-white"></span>
          </span>
        </div>
      </div>

      {/* Navigation */}

      <div className="flex flex-col items-center py-5 px-2">
        <NavgiationLinks />
      </div>

      {/* Bottom */}

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
        <button className="w-10 h-10 rounded-2xl bg-hover border border-borderColor flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 shadow-soft">
          ⚡
        </button>
      </div>
    </aside>
  )
}

export default MobileSidebar