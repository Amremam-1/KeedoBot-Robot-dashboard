import TableSkeleton from "./skeleton/TableSkeleton";

const Tabel = ({ currentUsers, isLoading }) => {
  return (
    <div className="rounded-2xl border border-borderColor bg-card shadow-soft overflow-hidden">
      {/* Scroll Container */}

      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full min-w-[700px] text-left">
          {/* Header */}

          <thead className="bg-hover border-b border-borderColor">
            <tr>
              <th className="py-4 px-6 text-sm font-semibold text-textPrimary whitespace-nowrap">
                Name
              </th>

              <th className="px-6 text-sm font-semibold text-textPrimary whitespace-nowrap">
                Email
              </th>

              <th className="px-6 text-sm font-semibold text-textPrimary whitespace-nowrap">
                Phone
              </th>

              <th className="px-6 text-sm font-semibold text-textPrimary whitespace-nowrap">
                Status
              </th>
            </tr>
          </thead>

          {/* Body */}

          <tbody>
            {isLoading ? (
              <TableSkeleton />
            ) : currentUsers.length > 0 ? (
              currentUsers.map((user) => (
                <tr
                  key={user.id}
                  className="
          border-b border-borderColor
          hover:bg-hover/60
          transition-all duration-200
        "
                >
                  {/* Name */}

                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      {/* Avatar */}

                      <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary to-orange-400 flex items-center justify-center text-white font-bold shadow-md">
                        {user.name?.charAt(0).toUpperCase()}
                      </div>

                      {/* Info */}

                      <div>
                        <h3 className="text-sm font-semibold text-textPrimary whitespace-nowrap">
                          {user.name}
                        </h3>

                        <p className="text-xs text-textSecondary whitespace-nowrap">
                          User ID: #{user.id}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Email */}

                  <td className="px-6 text-sm text-textSecondary whitespace-nowrap">
                    {user.email}
                  </td>

                  {/* Phone */}

                  <td className="px-6 text-sm text-textSecondary whitespace-nowrap">
                    {user.phone_number}
                  </td>

                  {/* Status */}

                  <td className="px-6">
                    <button
                      className={`
              min-w-[95px]
              h-8
              rounded
              text-xs
              font-semibold
              transition-all duration-300
              shadow-sm

              ${
                user.is_active
                  ? "bg-success/10 text-success border border-success/20"
                  : "bg-danger/10 text-danger border border-danger/20"
              }
            `}
                    >
                      {user.is_active ? "Active" : "Inactive"}
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={4}
                  className="py-16 text-center text-textSecondary text-sm"
                >
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tabel;
