import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import Login from "../pages/Login";
import AdminLayout from "../components/layout/AdminLayout";
import {
  LayoutDashboard,
  Users as UsersIcon,
} from "lucide-react";

export const routes = [
  {
    path: "/",
    label: "Dashboard",
    icon: LayoutDashboard,
    element: <Dashboard />,
  },
  {
    path: "/users",
    label: "Users",
    icon: UsersIcon,
    element: <Users />,
  },
];

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<AdminLayout />}>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>
    </Routes>
  );
}
