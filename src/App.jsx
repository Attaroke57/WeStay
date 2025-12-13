import { BrowserRouter, Routes, Route } from "react-router-dom"
import AdminLayout from "./layout/adminlayout"
import Dashboard from "./pages/admin/dashboard"
import Properties from "./pages/admin/properties"
import Users from "./pages/admin/users"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="properties" element={<Properties />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
