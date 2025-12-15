import { useState } from 'react';
import SummaryCards from '../../components/dashboard/summarycard';
import RevenueChart from '../../components/dashboard/revenuecharts';
import OccupancyChart from '../../components/dashboard/occupancychart';
import PaymentTable from '../../components/dashboard/paymenttable';
import DashboardSidebar from '../../components/dashboard/dashboardsidebar';

const summaryData = {
  totalRevenue: 45600000,
  revenueChange: 12,
  occupancyRate: 85,
  roomsOccupied: 34,
  totalRooms: 40,
  pendingPayments: 8,
  pendingAmount: 7200000,
  activeProperties: 5
};

const revenueData = [
  { month: 'Jul', amount: 38000000 },
  { month: 'Agu', amount: 40500000 },
  { month: 'Sep', amount: 39200000 },
  { month: 'Okt', amount: 42800000 },
  { month: 'Nov', amount: 40700000 },
  { month: 'Des', amount: 45600000 }
];

const occupancyData = [
  { name: 'Kos Mawar', occupied: 12, total: 15, rate: 80 },
  { name: 'Kos Melati', occupied: 8, total: 10, rate: 80 },
  { name: 'Kos Anggrek', occupied: 7, total: 8, rate: 87.5 },
  { name: 'Kos Dahlia', occupied: 5, total: 5, rate: 100 },
  { name: 'Kos Kenanga', occupied: 2, total: 2, rate: 100 }
];

const upcomingPayments = [
  { id: 1, tenant: 'Ahmad Saputra', property: 'Kos Mawar', amount: 1200000, dueDate: '2024-12-18', daysLeft: 3 },
  { id: 2, tenant: 'Siti Nurhaliza', property: 'Kos Melati', amount: 900000, dueDate: '2024-12-19', daysLeft: 4 },
  { id: 3, tenant: 'Budi Santoso', property: 'Kos Anggrek', amount: 1100000, dueDate: '2024-12-20', daysLeft: 5 },
  { id: 4, tenant: 'Dewi Lestari', property: 'Kos Mawar', amount: 1200000, dueDate: '2024-12-22', daysLeft: 7 }
];

export default function Dashboard() {
  const [timeRange, setTimeRange] = useState('6months');

  return (
    <div className="flex flex-col lg:flex-row gap-4 md:gap-6 p-4 md:p-6 max-w-full">
      {/* Main Content */}
      <div className="flex-1 min-w-0">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 md:mb-6 gap-3">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-xs md:text-sm text-gray-500 mt-1">Monitoring bisnis kos Anda</p>
          </div>
          <div className="flex items-center gap-2">
            <select 
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="w-full sm:w-auto px-3 md:px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="1month">Bulan Ini</option>
              <option value="3months">3 Bulan</option>
              <option value="6months">6 Bulan</option>
              <option value="1year">Tahun Ini</option>
            </select>
          </div>
        </div>

        <SummaryCards data={summaryData} />

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
          <RevenueChart data={revenueData} />
          <OccupancyChart data={occupancyData} />
        </div>

        <PaymentTable payments={upcomingPayments} />
      </div>

      {/* Sidebar */}
      <aside className="lg:w-80 xl:w-96 flex-shrink-0">
        <DashboardSidebar />
      </aside>
    </div>
  );
}