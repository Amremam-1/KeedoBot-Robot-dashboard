import React from "react";
import { useGetAllRobots } from "../../hook/useGetAllRobots";
import CardStatistic from "../../components/skeleton/CardStatistic";

const Robots = () => {
  const { data, isLoading } = useGetAllRobots();

  const robots = data?.robots || [];

  const totalRobots = robots.length;

  const activeRobots = robots.filter((robot) => robot.is_active).length;

  const boundRobots = robots.filter((robot) => robot.is_bound).length;

  const availableRobots = robots.filter((robot) => !robot.is_bound).length;

  return (
    <div className="bg-background rounded-2xl shadow-soft p-3 md:p-6">
      {/* Header */}

      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-3xl font-bold text-textPrimary">
          Robots Management
        </h1>

        <p className="text-textSecondary">
          Monitor robot activity and assignments
        </p>
      </div>

      {/* Statistics */}

      {isLoading ? (
        <CardStatistic length={4} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
          <div className="bg-card border border-borderColor rounded-2xl p-5 shadow-soft">
            <p className="text-sm text-textSecondary mb-2">Total Robots</p>

            <h2 className="text-4xl font-bold text-primary">{totalRobots}</h2>
          </div>

          <div className="bg-card border border-borderColor rounded-2xl p-5 shadow-soft">
            <p className="text-sm text-textSecondary mb-2">Active Robots</p>

            <h2 className="text-4xl font-bold text-success">{activeRobots}</h2>
          </div>

          <div className="bg-card border border-borderColor rounded-2xl p-5 shadow-soft">
            <p className="text-sm text-textSecondary mb-2">Bound Robots</p>

            <h2 className="text-4xl font-bold text-warning">{boundRobots}</h2>
          </div>

          <div className="bg-card border border-borderColor rounded-2xl p-5 shadow-soft">
            <p className="text-sm text-textSecondary mb-2">Available Robots</p>

            <h2 className="text-4xl font-bold text-secondary">
              {availableRobots}
            </h2>
          </div>
        </div>
      )}

      {/* Robots Cards */}

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
                      ${
                        robot.is_active
                          ? "bg-success/10 text-success"
                          : "bg-danger/10 text-danger"
                      }
                    `}
                  >
                    {robot.is_active ? "Active" : "Offline"}
                  </span>

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
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Robots;
