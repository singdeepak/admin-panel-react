import { Eye, Edit, Trash } from "lucide-react";

export default function ActionsCell({ onView, onEdit, onDelete }) {
  return (
    <td className="p-4 text-center space-x-2">
      <button
        onClick={onView}
        className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded hover:bg-blue-200 transition"
      >
        <Eye size={16} />
        View
      </button>
      <button
        onClick={onEdit}
        className="px-3 py-1 text-sm bg-yellow-100 text-yellow-800 rounded hover:bg-yellow-200 transition"
      >
        <Edit size={16} />
        Edit
      </button>
      <button
        onClick={onDelete}
        className="px-3 py-1 text-sm bg-red-100 text-red-800 rounded hover:bg-red-200 transition"
      >
        <Trash size={16} />
        Delete
      </button>
    </td>
  );
}
