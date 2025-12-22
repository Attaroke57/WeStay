import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./layout/adminlayout";

import Dashboard from "./pages/admin/dashboard";
import Properties from "./pages/admin/properties";
import Users from "./pages/admin/users";

import ScrapingSummaryPage from "./pages/admin/princing/sceaping-summary";
import ScrapingToolsPage from "./pages/admin/princing/scraping-tools";
import PriceMonitoringPage from "./pages/admin/price-monitoring";
import DailyUnitMonitorPage from "./pages/admin/daily-unit";
import MonthlyUnitMonitorPage from "./pages/admin/montly-unit";
import UnitPerformancePage from "./pages/admin/unit-peformance";
import Assets from './pages/admin/asset';
import VoucherClaimsPage from "./pages/admin/merchant-voucher/claims";
import CustomerPage from "./pages/admin/merchant-voucher/customer";
import VoucherDashboardPage from "./pages/admin/merchant-voucher/dashboard";
import MerchantPage from "./pages/admin/merchant-voucher/merchant";
import VoucherPage from "./pages/admin/merchant-voucher/voucher";

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

          <Route path="merchant-voucher">
            <Route path="dashboard" element={<VoucherDashboardPage />} />
            <Route path="merchant" element={<MerchantPage />} />
            <Route path="voucher" element={<VoucherPage />} />
            <Route path="claims" element={<VoucherClaimsPage />} />
            <Route path="customer" element={<CustomerPage />} />
          </Route>

          <Route path="price-monitoring" element={<PriceMonitoringPage />} />
          <Route path="daily-unit" element={<DailyUnitMonitorPage />} />
          <Route path="monthly-unit" element={<MonthlyUnitMonitorPage />} />
          <Route path="unit-performance" element={<UnitPerformancePage />} />
        </Route>

        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
