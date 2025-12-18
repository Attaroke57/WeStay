import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Home,
  Users,
  TrendingUp,
  DollarSign,
  FileText,
  ChevronDown,
  ChevronRight,
  X,
} from "lucide-react";

export default function Sidebar({ open, setOpen }) {
  const location = useLocation();
  const [expandedMenus, setExpandedMenus] = useState({
    "competitor-pricing": true,
  });

  const toggleMenu = (id) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const menuItems = [
    { label: "Dashboard", path: "/admin", icon: LayoutDashboard },
    { label: "Properti", path: "/admin/properties", icon: Home },
    { label: "Pelanggan", path: "/admin/users", icon: Users },

    {
      id: "competitor-pricing",
      label: "Competitor Pricing",
      icon: TrendingUp,
      hasSubmenu: true,
      submenu: [
        {
          label: "Scraping Summary",
          path: "/admin/pricing/scraping-summary",
        },
        {
          label: "Scraping Tools",
          path: "/admin/pricing/scraping-tools",
        },
      ],
    },

    {
      label: "Price Monitoring",
      path: "/admin/price-monitoring",
      icon: DollarSign,
    },
    {
      label: "Merchant & Voucher",
      path: "/admin/merchant-voucher",
      icon: FileText,
    },
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

      {/* SIDEBAR */}
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
        <div className="h-16 px-6 flex items-center justify-between border-b border-gray-800">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold">
              W
            </div>
            <span className="font-bold">WeStay Admin</span>
          </div>

          <button className="md:hidden" onClick={() => setOpen(false)}>
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* MENU */}
        <nav className="px-4 py-4 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;

            // ===== MENU DENGAN SUBMENU =====
            if (item.hasSubmenu) {
              const expanded = expandedMenus[item.id];
              const activeSub = item.submenu.some(
                (sub) => location.pathname === sub.path
              );

              return (
                <div key={item.id}>
                  <button
                    onClick={() => toggleMenu(item.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition
                      ${
                        activeSub
                          ? "bg-blue-600 text-white"
                          : "text-gray-300 hover:bg-gray-800 hover:text-white"
                      }
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </div>
                    {expanded ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </button>

                  {expanded && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.submenu.map((sub) => {
                        const active =
                          location.pathname === sub.path;

                        return (
                          <Link
                            key={sub.path}
                            to={sub.path}
                            onClick={() => setOpen(false)}
                            className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition
                              ${
                                active
                                  ? "bg-blue-600 text-white"
                                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
                              }
                            `}
                          >
                            <div className="w-2 h-2 rounded-full bg-current" />
                            <span>{sub.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            // ===== MENU NORMAL =====
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
