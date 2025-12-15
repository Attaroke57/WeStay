// src/layout/adminlayout.jsx
import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import DashboardSidebar from "../components/dashboard/dashboardsidebar";

export default function AdminLayout() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isDashboard =
    location.pathname === "/admin" || location.pathname === "/admin/";

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      <div className="flex-1 flex flex-col">
        <Navbar setOpen={setSidebarOpen} />

        <main className="p-6 flex gap-6">
          <div className="flex-1">
            <Outlet />
          </div>

          {isDashboard && <DashboardSidebar />}
        </main>
      </div>
    </div>
  );
}
