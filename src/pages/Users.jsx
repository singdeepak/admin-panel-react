import StatusCell from "../components/ui/StatusCell";
import { Eye, Edit, Trash } from "lucide-react";

export default function Users() {
  const handleView = (name) => console.log("View", name);
  const handleEdit = (name) => console.log("Edit", name);
  const handleDelete = (name) => console.log("Delete", name);

  const users = [
    { id: 1, name: "John Doe", email: "john@mail.com", phone: "9865858965", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@mail.com", phone: "9876543210", role: "Moderator", status: "Inactive" },
    { id: 3, name: "Bob Lee", email: "bob@mail.com", phone: "9123456789", role: "Editor", status: "Pending" },
  ];

  return (
    <div className="bg-white rounded-lg shadow overflow-x-auto">
      <table className="w-full text-left">
        <thead className="border-b bg-gray-50">
          <tr>
            <th className="p-4">Name</th>
            <th className="p-4">Email</th>
            <th className="p-4">Phone</th>
            <th className="p-4">Role</th>
            <th className="p-4">Status</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b hover:bg-gray-50">
              <td className="p-4">{user.name}</td>
              <td className="p-4">{user.email}</td>
              <td className="p-4">{user.phone}</td>
              <td className="p-4">{user.role}</td>
              <td><StatusCell status={user.status} /></td>
              <td className="p-4 flex gap-2">
                <button
                  onClick={() => handleView(user.name)}
                  className="flex items-center gap-1 px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded hover:bg-blue-200 transition"
                >
                  <Eye size={16} /> View
                </button>
                <button
                  onClick={() => handleEdit(user.name)}
                  className="flex items-center gap-1 px-3 py-1 text-sm bg-yellow-100 text-yellow-800 rounded hover:bg-yellow-200 transition"
                >
                  <Edit size={16} /> Edit
                </button>
                <button
                  onClick={() => handleDelete(user.name)}
                  className="flex items-center gap-1 px-3 py-1 text-sm bg-red-100 text-red-800 rounded hover:bg-red-200 transition"
                >
                  <Trash size={16} /> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
