import { XCircle, Power } from "lucide-react";

const StatusModal = ({ onClose, onConfirm, loading }) => {
  return (
    <div
      className="
        fixed
        inset-0
        z-50
        bg-black/40
        backdrop-blur-sm
        flex
        items-center
        justify-center
        p-4
        animate-in
        fade-in
        duration-300
      "
    >
      {/* Modal */}

      <div
        className="
          relative
          w-full
          max-w-md
          rounded-2xl
          bg-card
          border
          border-borderColor
          shadow-2xl
          overflow-hidden
          animate-in
          zoom-in-95
          duration-300
        "
      >
        {/* Top Gradient */}

        <div className="h-2 bg-gradient-to-r from-danger via-warning to-primary" />

        {/* Content */}

        <div className="p-6">
          {/* Icon */}

          <div
            className="
              w-16
              h-16
              rounded-full
              bg-danger/10
              flex
              items-center
              justify-center
              mx-auto
              mb-5
            "
          >
            <Power className="text-danger" size={30} strokeWidth={2.5} />
          </div>

          {/* Title */}

          <h2 className="text-2xl font-bold text-textPrimary text-center mb-3">
            Change Robot Status
          </h2>

          {/* Description */}

          <p className="text-textSecondary text-center leading-relaxed">
            Are you sure you want to change this robot status? This action will
            update the robot availability immediately.
          </p>

          {/* Actions */}

          <div className="flex items-center gap-3 mt-8">
            {/* Cancel */}

            <button
              onClick={onClose}
              className="
                flex-1
                h-11
                rounded-xl
                border
                border-borderColor
                bg-background
                text-textPrimary
                font-medium
                transition-all
                duration-300
                hover:bg-hover
              "
            >
              Cancel
            </button>

            {/* Confirm */}

            <button
              onClick={onConfirm}
              className="
                flex-1
                h-11
                rounded-xl
                bg-danger
                hover:bg-red-600
                text-white
                font-medium
                transition-all
                duration-300
                hover:scale-[1.02]
                disabled:opacity-60
                disabled:cursor-not-allowed
              "
            >
              {loading ? "Loading.." : "Confirm"}
            </button>
          </div>

          {/* Close Button */}

          <button
            onClick={onClose}
            className="
              absolute
              top-4
              right-4
              text-textSecondary
              hover:text-danger
              transition-colors
            "
          >
            <XCircle size={22} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatusModal;
