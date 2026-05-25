const TableSkeleton = ({
  rows = 5,
  columns = 4,
}) => {
  return (
    <>
      {Array.from({
        length: rows,
      }).map((_, rowIdx) => (
        <tr
          key={rowIdx}
          className="
            border-b border-borderColor
            animate-pulse
          "
        >
          {Array.from({
            length: columns,
          }).map(
            (
              _,
              colIdx
            ) => (
              <td
                key={colIdx}
                className="px-6 py-4"
              >
                {/* NAME COLUMN */}

                {colIdx === 0 ? (
                  <div className="flex items-center gap-3">
                    {/* Avatar */}

                    <div className="w-10 h-10 rounded-xl bg-hover"></div>

                    {/* Text */}

                    <div className="space-y-2">
                      <div className="h-3 w-28 rounded-full bg-hover"></div>

                      <div className="h-2 w-16 rounded-full bg-hover"></div>
                    </div>
                  </div>
                ) : colIdx ===
                  3 ? (
                  /* STATUS */

                  <div className="h-8 w-24 rounded-xl bg-hover"></div>
                ) : (
                  /* DEFAULT */

                  <div className="h-3 w-full max-w-[140px] rounded-full bg-hover"></div>
                )}
              </td>
            )
          )}
        </tr>
      ))}
    </>
  )
}

export default TableSkeleton