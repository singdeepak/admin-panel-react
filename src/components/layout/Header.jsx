import { Bell, Search, LogOut } from "lucide-react";

export default function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-100 px-6 flex items-center justify-between">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <h1 className="text-lg font-semibold text-gray-900">
          Dashboard
        </h1>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2">
          <Search size={16} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm px-2 w-40"
          />
        </div>

        {/* Notifications */}
        <button className="relative p-2 rounded-lg hover:bg-gray-100 transition">
          <Bell size={18} className="text-gray-600" />
          <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full" />
        </button>

        {/* User */}
        <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-lg transition">
          <img
            src="https://i.pravatar.cc/32"
            alt="User avatar"
            className="w-8 h-8 rounded-full"
          />
          <span className="hidden md:block text-sm font-medium text-gray-700">
            Admin
          </span>
        </div>

        {/* Logout */}
        <button className="flex items-center gap-2 text-sm bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
          <LogOut size={16} />
          <span className="hidden sm:block">Logout</span>
        </button>
      </div>
    </header>
  );
}
