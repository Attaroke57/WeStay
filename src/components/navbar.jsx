import { useState } from "react";
import { Bell, ChevronDown, Menu, Search } from "lucide-react";

function Navbar({ setOpen }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
<nav className="bg-white border-b h-16 fixed top-0 left-0 right-0 z-30 md:ml-64">
      <div className="px-6 h-full">
        <div className="flex items-center justify-between h-full">

          {/* LEFT */}
          <div className="flex items-center gap-4">
            {/* HAMBURGER (MOBILE) */}
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
              onClick={() => setOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* SEARCH */}
            <div className="hidden sm:block w-64">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari..."
                  className="w-full px-4 py-2 pl-10 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">
            {/* NOTIFICATION */}
            <button className="relative p-2 hover:bg-gray-100 rounded-lg">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
            </button>

            {/* USER DROPDOWN */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">
                    NA
                  </span>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-1 z-50">
                  <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                    Profil
                  </button>
                  <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                    Pengaturan
                  </button>
                  <hr className="my-1" />
                  <button className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                    Keluar
                  </button>
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
