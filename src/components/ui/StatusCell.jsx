export default function StatusCell({ status }) {
  const statusClasses = {
    Active: "bg-green-100 text-green-800",
    Inactive: "bg-gray-100 text-gray-500",
    Pending: "bg-yellow-100 text-yellow-800",
  };

  return (
    <td className="p-4 text-center">
      <span
        className={`px-3 py-1 rounded-full text-sm font-semibold ${
          statusClasses[status] || "bg-gray-100 text-gray-500"
        }`}
      >
        {status}
      </span>
    </td>
  );
}
