import NavgiationLinks from "./NavgiationLinks"

const DesktopSidebar = ({
  openSidebar,
}) => {
  return (
    <aside
      className={`
        fixed top-0 left-0 z-50
        h-screen w-72
        bg-card/95 backdrop-blur-xl
        border-r border-borderColor
        text-textPrimary
        shadow-soft
        transition-transform duration-300 ease-in-out
        ${
          openSidebar
            ? "translate-x-0"
            : "-translate-x-full"
        }
      `}
    >
      {/* Header */}

      <div className="relative h-16 px-5 flex items-center justify-between border-b border-borderColor overflow-hidden">
        {/* Background Glow */}

        <div className="absolute -top-10 -right-10 w-28 h-28 bg-primary/10 rounded-full blur-3xl"></div>

        {/* Left */}

        <div className="relative flex items-center">
          {/* Logo */}

          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary to-primaryHover p-[1px] shadow-soft">
            <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center overflow-hidden">
              <img
                src="/logo.png"
                alt="logo"
                loading="lazy"
                className="w-8 h-8 object-contain"
              />
            </div>
          </div>

          {/* Title */}

          <div className="ms-3">
            <h1 className="text-sm font-bold tracking-[0.15em] uppercase text-textPrimary">
              Keedo Bot
            </h1>

            <p className="text-[11px] text-textSecondary mt-[2px]">
              Robot Control Panel
            </p>
          </div>
        </div>

        {/* Status */}

        <div className="relative flex items-center justify-center">
          <span className="absolute w-3 h-3 rounded-full bg-online animate-ping opacity-75"></span>

          <span className="relative w-2.5 h-2.5 rounded-full bg-online border border-white"></span>
        </div>
      </div>

      {/* Navigation */}

      <div className="px-3 py-5">
        <NavgiationLinks />
      </div>

      {/* Footer Card */}

      <div className="absolute bottom-5 left-4 right-4">
        <div className="relative overflow-hidden rounded-2xl border border-borderColor bg-hover p-4 shadow-soft">
          {/* Glow */}

          <div className="absolute -top-8 -right-8 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>

          <div className="relative">
            <p className="text-sm font-semibold text-textPrimary">
              KeedoBot System
            </p>

            <p className="text-xs text-textSecondary mt-1 leading-relaxed">
              Smart robot management with
              real-time monitoring.
            </p>

            <button className="mt-4 w-full h-10 rounded-xl bg-primary hover:bg-primaryHover transition-all duration-300 text-white text-sm font-medium shadow-soft">
              Explore Dashboard
            </button>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default DesktopSidebar