import { sales } from "../../data"
import Charts from "../../components/Charts"

const Home = () => {
  return (
    <div className="p-6 space-y-8 bg-background min-h-screen">
      {/* Title */}
      <div>
        <h1 className="text-2xl font-bold text-textPrimary">
          Dashboard Overview
        </h1>
        <p className="text-textSecondary">
          Welcome back! Here's what's happening today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sales.map((item) => (
          <div
            key={item.num}
            className="bg-card border border-borderColor shadow-sm rounded-xl p-5"
          >
            <h3 className="text-sm text-textSecondary mb-2.5">{item.title}</h3>
            <p className="text-2xl font-bold text-textPrimary">{item.num}</p>
          </div>
        ))}
      </div>

      {/* Charts */}

      <Charts />
    </div>
  )
}

export default Home
