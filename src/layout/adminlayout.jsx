// src/layout/adminlayout.jsx
import { Outlet, useLocation } from "react-router-dom"
import Sidebar from "../components/sidebar"
import Navbar from "../components/navbar"
import DashboardSidebar from "../components/dashboard/dashboardsidebar"

export default function AdminLayout() {
  const location = useLocation();
  const isDashboard = location.pathname === '/admin' || location.pathname === '/admin/';

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6 flex gap-6">
          <div className="flex-1">
            <Outlet />
          </div>
          {/* Show Dashboard Sidebar only on dashboard page */}
          {isDashboard && <DashboardSidebar />}
        </main>
      </div>
    </div>
  );
}