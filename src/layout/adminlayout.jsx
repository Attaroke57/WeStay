import { Outlet } from "react-router-dom"
import Sidebar from "../components/sidebar"
import Navbar from "../components/navbar"

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
