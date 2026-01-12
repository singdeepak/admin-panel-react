import { NavLink } from "react-router-dom";
import { LayoutDashboard, Users, FileText, Gamepad2, Shield, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r">
      <div className="p-4 text-xl font-bold">Manager</div>

      <nav className="flex flex-col gap-1 p-2">
        <NavLink
          to="/"
          className="flex items-center gap-2 p-2 rounded hover:bg-gray-100"
        >
          <LayoutDashboard size={17} />
          Dashboard
        </NavLink>

        <NavLink
          to="/users"
          className="flex items-center gap-2 p-2 rounded hover:bg-gray-100"
        >
          <Users size={18} />
          Users
        </NavLink>

        <NavLink
          to="/users"
          className="flex items-center gap-2 p-2 rounded hover:bg-gray-100"
        >
          <Gamepad2 size={18} />
          Players
        </NavLink>

        <NavLink to="/cms" className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
          <Shield  size={18} />
          Club
        </NavLink>

        <NavLink to="/cms" className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
          <FileText size={18} />
          CMS
        </NavLink>

        <NavLink to="/cms" className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
          <Settings size={18} />
          Settings
        </NavLink>
      </nav>
    </aside>
  );
}
