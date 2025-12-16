import { useState } from "react";
import SummaryCards from "../../components/dashboard/summarycard";
import RevenueChart from "../../components/dashboard/revenuecharts";
import OccupancyChart from "../../components/dashboard/occupancychart";
import PaymentTable from "../../components/dashboard/paymenttable";
import DashboardSidebar from "../../components/dashboard/dashboardsidebar";

/* ================== DATA DUMMY ================== */
const summaryData = {
  totalRevenue: 45600000,
  revenueChange: 12,
  occupancyRate: 85,
  roomsOccupied: 34,
  totalRooms: 40,
  pendingPayments: 8,
  pendingAmount: 7200000,
  activeProperties: 5,
};

const revenueData = [
  { month: "Jul", amount: 38000000 },
  { month: "Agu", amount: 40500000 },
  { month: "Sep", amount: 39200000 },
  { month: "Okt", amount: 42800000 },
  { month: "Nov", amount: 40700000 },
  { month: "Des", amount: 45600000 },
];

const occupancyData = [
  { name: "Kos Mawar", occupied: 12, total: 15, rate: 80 },
  { name: "Kos Melati", occupied: 8, total: 10, rate: 80 },
  { name: "Kos Anggrek", occupied: 7, total: 8, rate: 87.5 },
  { name: "Kos Dahlia", occupied: 5, total: 5, rate: 100 },
  { name: "Kos Kenanga", occupied: 2, total: 2, rate: 100 },
];

const upcomingPayments = [
  { id: 1, tenant: "Ahmad Saputra", property: "Kos Mawar", amount: 1200000, dueDate: "2024-12-18" },
  { id: 2, tenant: "Siti Nurhaliza", property: "Kos Melati", amount: 900000, dueDate: "2024-12-19" },
  { id: 3, tenant: "Budi Santoso", property: "Kos Anggrek", amount: 1100000, dueDate: "2024-12-20" },
];

/* ================== COMPONENT ================== */
export default function Dashboard() {
  const [timeRange, setTimeRange] = useState("6months");

  return (
    <div className="w-full px-4 sm:px-6 py-4">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-sm text-gray-500">Monitoring bisnis kos Anda</p>
        </div>

        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="w-full md:w-48 px-4 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
        >
          <option value="1month">Bulan Ini</option>
          <option value="3months">3 Bulan</option>
          <option value="6months">6 Bulan</option>
          <option value="1year">Tahun Ini</option>
        </select>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-6">
        {/* MAIN */}
        <div className="space-y-6 min-w-0">
          <SummaryCards data={summaryData} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <RevenueChart data={revenueData} />
            <OccupancyChart data={occupancyData} />
          </div>

          <PaymentTable payments={upcomingPayments} />
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="hidden xl:block">
          <DashboardSidebar />
        </aside>
      </div>
    </div>
  );
}
