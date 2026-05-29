import { useState } from "react";
import { useGetAllRobots, useToggleStatus } from "../../hook/useGetAllRobots";
import CardStatistic from "../../components/skeleton/CardStatistic";
import RobotsCard from "../../components/RobotsCard";
import StatusModal from "../../components/modal/StatusModal";

const Robots = () => {
  // Api for get robots
  const { data, isLoading } = useGetAllRobots();
  const robots = data?.robots || [];

  // APi for toggle status (active / inactive)
  const { submit, isPending } = useToggleStatus();

  // controller for open or close modal should use redux
  const [open, setOpen] = useState(false);
  const [selectedRobot, setSelectedRobot] = useState(null);
  // Open Modal

  const handleOpen = (robot) => {
    setSelectedRobot(robot);
    setOpen(true);
  };

  // Close Modal

  const handleClose = () => {
    setOpen(false);
    setSelectedRobot(null);
  };

  const handleConfirm = () => {
    if (!selectedRobot) return;

    submit(selectedRobot.serial_number);

    handleClose();
  };

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

      <RobotsCard robots={robots} onOpen={handleOpen} />

      {/* Modal */}

      {open && (
        <StatusModal
          robot={selectedRobot}
          loading={isPending}
          onClose={handleClose}
          onConfirm={handleConfirm}
        />
      )}
    </div>
  );
};

export default Robots;
