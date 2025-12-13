import { Link } from "react-router-dom"

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen">
      <div className="p-6 text-xl font-bold">
        WeStay Admin
      </div>

      <nav className="px-4 space-y-2">
        <Link to="/admin" className="block p-2 rounded hover:bg-gray-700">
          Dashboard
        </Link>
        <Link to="/admin/properties" className="block p-2 rounded hover:bg-gray-700">
          Properti
        </Link>
        <Link to="/admin/users" className="block p-2 rounded hover:bg-gray-700">
          Users
        </Link>
      </nav>
    </aside>
  )
}
