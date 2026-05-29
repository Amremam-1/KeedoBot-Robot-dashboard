import { Link, Power } from "lucide-react";
import { useState } from "react";

const RobotsCard = ({ robots, onOpen }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {robots.map((robot) => (
        <div
          key={robot.id}
          className="
              group
              relative
              overflow-hidden
              rounded-2xl
              bg-card
              border
              border-borderColor
              shadow-soft
              transition-all
              duration-500
              hover:-translate-y-2
              hover:shadow-2xl
            "
        >
          {/* Glow Effect */}

          <div
            className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-500
                bg-gradient-to-r
                from-primary
                via-secondary
                to-accent
                blur-3xl
              "
          />

          {/* Top Gradient */}

          <div
            className="
                relative
                h-2
                bg-gradient-to-r
                from-primary
                via-secondary
                to-accent
              "
          />

          {/* Main Content */}

          <div className="relative z-10 p-5">
            {/* Image */}

            <div className="relative flex justify-center items-center">
              <img
                src={robot.image_url}
                alt={robot.name}
                className="
                    h-44
                    object-contain
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:rotate-2
                  "
              />

              {/* Status */}

              <div
                className={`
                    absolute
                    top-0
                    right-0
                    px-3
                    py-1
                    rounded-full
                    text-xs
                    font-semibold
                    shadow-lg
                    ${
                      robot.is_bound
                        ? "bg-warning text-white"
                        : "bg-success text-white"
                    }
                  `}
              >
                {robot.status}
              </div>
            </div>

            {/* Robot Info */}

            <div className="mt-6 space-y-4">
              {/* Name */}

              <div>
                <h2
                  className="
                      text-xl
                      font-bold
                      text-textPrimary
                      transition-colors
                      duration-300
                      group-hover:text-primary
                    "
                >
                  {robot.name}
                </h2>

                <p className="text-sm text-textSecondary mt-1">
                  {robot.serial_number}
                </p>
              </div>

              {/* Details */}

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-textSecondary">Type</span>

                  <span className="text-sm font-medium text-textPrimary">
                    {robot.type}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-textSecondary">Assigned</span>

                  <span className="text-sm font-medium text-textPrimary">
                    {robot.assigned_user?.name || "Not Assigned"}
                  </span>
                </div>
              </div>

              {/* Footer */}

              <div className="pt-4 border-t border-borderColor flex items-center justify-between">
                <span
                  className={`
                      px-3
                      py-1
                      rounded-full
                      text-xs
                      font-semibold
                      shadow
                      ${
                        robot.is_active
                          ? "bg-success/10 text-success border border-green-400"
                          : "bg-danger/10 text-danger border border-red-400"
                      }
                    `}
                >
                  {robot.is_active ? "Active" : "Offline"}
                </span>

                <div className="flex items-center gap-3">
                  <button
                    className="
                      px-4
                      py-2
                      rounded-xl
                      bg-primary
                      hover:bg-primaryHover
                      text-white
                      text-sm
                      font-medium
                      transition-all
                      duration-300
                      hover:scale-105
                      "
                  >
                    View Details
                  </button>

                  {/* handle Active for robot */}
                  <button
                    onClick={() => onOpen(robot)}
                    className="group/power relative w-10 h-10 rounded-xl border border-borderColor
                    bg-background flex items-center justify-center transition-all duration-300 hover:bg-danger hover:border-danger
                      hover:shadow-lg hover:shadow-danger/20 active:scale-95"
                  >
                    <Power
                      strokeWidth={2.5}
                      className="text-textSecondary transition-all duration-300 group-hover/power:text-white group-hover/power:rotate-12"
                    />
                  </button>

                  {/* handle Boud for user (assgin) */}
                  <button
                    className="group/power relative w-10 h-10 rounded-xl border border-borderColor
                    bg-background flex items-center justify-center transition-all duration-300 hover:bg-success hover:border-success
                      hover:shadow-lg hover:shadow-danger/20 active:scale-95"
                  >
                    <Link
                      strokeWidth={2.5}
                      className="text-textSecondary transition-all duration-300 group-hover/power:text-white group-hover/power:rotate-12"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RobotsCard;
