// src/layout/adminlayout.jsx
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Sidebar */}
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      {/* Main Content with Left Margin for Sidebar */}
      <div className="flex flex-col min-h-screen ml-0 md:ml-64 transition-all duration-300">
        {/* Top Navbar */}
        <Navbar setOpen={setSidebarOpen} />

        {/* Main Content Area - Scrollable */}
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}