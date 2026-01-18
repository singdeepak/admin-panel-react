import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { routes } from "../../routes/AppRoutes"; // ✅ CORRECT

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`h-screen bg-white border-r border-gray-100 flex flex-col
        transition-all duration-300
        ${collapsed ? "w-20" : "w-64"}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 h-16 border-b border-gray-100">
        {!collapsed && (
          <span className="text-lg font-semibold text-gray-900">
            Manager
          </span>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-lg hover:bg-gray-100 transition"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-2 space-y-1">
        {routes.map(({ path, label, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium
               ${
                 isActive
                   ? "bg-gray-900 text-white"
                   : "text-gray-700 hover:bg-gray-100"
               }`
            }
          >
            <Icon size={18} />
            {!collapsed && <span>{label}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-100 text-xs text-gray-500">
        {!collapsed && "© 2026 Manager"}
      </div>
    </aside>
  );
}
