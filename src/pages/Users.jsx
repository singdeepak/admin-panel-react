import StatusCell from "../components/ui/StatusCell";
import { Eye, Edit, Trash } from "lucide-react";

export default function Users() {
  const handleView = (name) => console.log("View", name);
  const handleEdit = (name) => console.log("Edit", name);
  const handleDelete = (name) => console.log("Delete", name);

  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@mail.com",
      phone: "9865858965",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@mail.com",
      phone: "9876543210",
      role: "Moderator",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Bob Lee",
      email: "bob@mail.com",
      phone: "9123456789",
      role: "Editor",
      status: "Pending",
    },
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900">
          Users
        </h2>
        <button className="text-sm font-medium bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
          Add User
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="px-6 py-3 text-left font-medium">Name</th>
              <th className="px-6 py-3 text-left font-medium">Email</th>
              <th className="px-6 py-3 text-left font-medium">Phone</th>
              <th className="px-6 py-3 text-left font-medium">Role</th>
              <th className="px-6 py-3 text-left font-medium">Status</th>
              <th className="px-6 py-3 text-right font-medium">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {users.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-gray-50 transition"
              >
                <td className="px-6 py-4 font-medium text-gray-900">
                  {user.name}
                </td>

                <td className="px-6 py-4 text-gray-600">
                  {user.email}
                </td>

                <td className="px-6 py-4 text-gray-600">
                  {user.phone}
                </td>

                <td className="px-6 py-4">
                  <span className="inline-flex px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700">
                    {user.role}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <StatusCell status={user.status} />
                </td>

                <td className="px-6 py-4 text-right">
                  <div className="inline-flex items-center gap-2">
                    <button
                      onClick={() => handleView(user.name)}
                      className="p-2 rounded-lg hover:bg-blue-50 text-blue-600 transition"
                      title="View"
                    >
                      <Eye size={16} />
                    </button>

                    <button
                      onClick={() => handleEdit(user.name)}
                      className="p-2 rounded-lg hover:bg-yellow-50 text-yellow-600 transition"
                      title="Edit"
                    >
                      <Edit size={16} />
                    </button>

                    <button
                      onClick={() => handleDelete(user.name)}
                      className="p-2 rounded-lg hover:bg-red-50 text-red-600 transition"
                      title="Delete"
                    >
                      <Trash size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
