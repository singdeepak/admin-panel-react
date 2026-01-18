import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Users, ShoppingCart, IndianRupee } from "lucide-react";

const stats = [
  {
    label: "Users",
    value: "1,245",
    icon: Users,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    label: "Orders",
    value: "312",
    icon: ShoppingCart,
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    label: "Revenue",
    value: "₹84,500",
    icon: IndianRupee,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
];

const revenueData = [
  { name: "Jan", revenue: 4000 },
  { name: "Feb", revenue: 3000 },
  { name: "Mar", revenue: 5000 },
  { name: "Apr", revenue: 4200 },
  { name: "May", revenue: 6100 },
  { name: "Jun", revenue: 7200 },
];

const orderData = [
  { name: "Mon", orders: 40 },
  { name: "Tue", orders: 65 },
  { name: "Wed", orders: 52 },
  { name: "Thu", orders: 71 },
  { name: "Fri", orders: 90 },
];

const recentOrders = [
  { id: "#ORD001", customer: "Amit", amount: "₹2,400", status: "Completed" },
  { id: "#ORD002", customer: "Riya", amount: "₹1,200", status: "Pending" },
  { id: "#ORD003", customer: "Karan", amount: "₹3,600", status: "Completed" },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">{item.label}</p>
                  <p className="text-3xl font-semibold mt-2 text-gray-900">
                    {item.value}
                  </p>
                </div>
                <div className={`p-3 rounded-lg ${item.bg} ${item.color}`}>
                  <Icon size={24} />
                </div>
              </div>
              <p className="text-sm text-green-600 mt-4">+12% this month</p>
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Line Chart */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Revenue Overview
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="revenue" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Orders Bar Chart */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Orders This Week
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={orderData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="orders" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Orders Table */}
      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Recent Orders</h3>
          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
            View all
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="text-left px-4 py-3 font-medium">Order ID</th>
                <th className="text-left px-4 py-3 font-medium">Customer</th>
                <th className="text-right px-4 py-3 font-medium">Amount</th>
                <th className="text-left px-4 py-3 font-medium">Status</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {recentOrders.map((order) => (
                <tr
                  key={order.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-4 font-medium text-gray-800">
                    {order.id}
                  </td>

                  <td className="px-4 py-4 text-gray-700">{order.customer}</td>

                  <td className="px-4 py-4 text-right font-semibold text-gray-900">
                    {order.amount}
                  </td>

                  <td className="px-4 py-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        order.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
