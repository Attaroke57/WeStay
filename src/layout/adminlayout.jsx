// src/layout/adminlayout.jsx
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* SIDEBAR (FIXED) */}
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      {/* CONTENT WRAPPER */}
      <div className="flex flex-col min-h-screen ml-0 md:ml-64 transition-all duration-300">
        
        {/* NAVBAR (FIXED) */}
        <Navbar setOpen={setSidebarOpen} />

        {/* MAIN CONTENT */}
        <main className="flex-1 overflow-auto pt-16 p-6">
          <Outlet />
        </main>

      </div>
    </div>
  );
}
