import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { salesData, usersData } from "../data"


const Charts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-6 shadow rounded-xl bg-card">
        <h3 className="font-semibold text-textPrimary mb-4">Sales Chart</h3>

        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={salesData}>
            <CartesianGrid stroke="#E5E7EB" />
            <XAxis dataKey="name" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#6366F1"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="p-6 shadow rounded-xl bg-card">
        <h3 className="font-semibold text-textPrimary mb-4">Users Growthrs</h3>

        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={usersData}>
            <CartesianGrid stroke="#E5E7EB" />
            <XAxis dataKey="name" stroke="#6B7280" />
            <YAxis stroke="#6B7280" />
            <Tooltip />
            <Bar dataKey="users" fill="#06B6D4" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Charts
