const CardStatistic = ({ length = 4 }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {[...Array(length)].map((_, idx) => (
        <div
          key={idx}
          className="p-5 animate-pulse bg-card border border-borderColor rounded-2xl shadow-soft"
        >
          {/* Title */}
          <div className="h-4 w-28 rounded bg-background mb-4"></div>

          {/* Number */}
          <div className="h-10 w-16 rounded bg-background"></div>
        </div>
      ))}
    </div>
  )
}

export default CardStatistic