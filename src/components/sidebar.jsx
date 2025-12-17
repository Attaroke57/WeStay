// src/components/sidebar.jsx
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Home, Users, X } from "lucide-react";

export default function Sidebar({ open, setOpen }) {
  const location = useLocation();

  const menuItems = [
    { label: "Dashboard", path: "/admin", icon: LayoutDashboard },
    { label: "Properti", path: "/admin/properties", icon: Home },
    { label: "Pelanggan", path: "/admin/users", icon: Users },
  ];

  return (
    <>
      {/* OVERLAY (MOBILE) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* SIDEBAR - FIXED POSITION */}
      <aside
        className={`
          fixed top-0 left-0 z-50
          w-64 h-screen
          bg-gray-900 text-white
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
          overflow-y-auto
        `}
      >
        {/* HEADER */}
        <div className="h-16 px-6 flex items-center justify-between border-b border-gray-800 flex-shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold">
              W
            </div>
            <span className="font-bold">WeStay Admin</span>
          </div>

          {/* CLOSE BTN (MOBILE) */}
          <button
            className="md:hidden"
            onClick={() => setOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* MENU */}
        <nav className="px-4 py-4 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition
                  ${
                    active
                      ? "bg-blue-600 text-white"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  }
                `}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}