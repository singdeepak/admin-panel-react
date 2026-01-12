export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {["Users", "Orders", "Revenue"].map((item) => (
        <div
          key={item}
          className="bg-white p-6 rounded-lg shadow"
        >
          <p className="text-sm text-gray-500">{item}</p>
          <p className="text-2xl font-bold mt-2">123</p>
        </div>
      ))}
    </div>
  );
}
