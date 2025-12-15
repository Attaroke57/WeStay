// src/components/navbar.jsx
import { useState } from "react";
import { Bell, ChevronDown, Menu } from "lucide-react";

function Navbar({ setOpen }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white border-b sticky top-0 z-30">
      <div className="px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* LEFT */}
          <div className="flex items-center gap-4">
            {/* HAMBURGER (MOBILE) */}
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
              onClick={() => setOpen(true)}
            >
              <Menu />
            </button>

            {/* Search */}
            <div className="hidden sm:block w-64">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari..."
                  className="w-full px-4 py-2 pl-10 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <svg
                  className="absolute left-3 top-2.5 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-gray-100 rounded-lg">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
            </button>

            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">JD</span>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow border py-1">
                  <a className="block px-4 py-2 text-sm hover:bg-gray-100">
                    Profil
                  </a>
                  <a className="block px-4 py-2 text-sm hover:bg-gray-100">
                    Pengaturan
                  </a>
                  <hr />
                  <a className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                    Keluar
                  </a>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
