export default function Header() {
  return (
    <header className="h-14 bg-white border-b flex items-center px-6 justify-between">
      <h1 className="font-semibold">Dashboard</h1>
      <button className="text-sm bg-black text-white px-3 py-1 rounded">
        Logout
      </button>
    </header>
  );
}
