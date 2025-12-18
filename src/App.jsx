import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./layout/adminlayout";

import Dashboard from "./pages/admin/dashboard";
import Properties from "./pages/admin/properties";
import Users from "./pages/admin/users";

import ScrapingSummaryPage from "./pages/admin/princing/sceaping-summary";
import ScrapingToolsPage from "./pages/admin/princing/scraping-tools";
import PriceMonitoringPage from "./pages/admin/price-monitoring";
import MerchantVoucherPage from "./pages/admin/merchant-voucher";
import Assets from './pages/admin/asset';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root */}
        <Route path="/" element={<Navigate to="/admin" replace />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="properties" element={<Properties />} />
          <Route path="users" element={<Users />} />
          <Route path="assets" element={<Assets />} />

          <Route path="pricing">
            <Route path="scraping-summary" element={<ScrapingSummaryPage />} />
            <Route path="scraping-tools" element={<ScrapingToolsPage />} />
          </Route>

          <Route path="price-monitoring" element={<PriceMonitoringPage />} />
          <Route path="merchant-voucher" element={<MerchantVoucherPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
