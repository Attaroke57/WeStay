import { useState } from "react";
import { Plus, DollarSign, Home, FileText, AlertCircle, Calendar, TrendingUp, TrendingDown, Users } from 'lucide-react';

/* ================== COMPONENTS ================== */
function SummaryCards({ data }) {
  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(number);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-4">
      {/* Total Pendapatan */}
      <div className="bg-white rounded-lg md:rounded-xl shadow-sm p-4 md:p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-3 md:mb-4">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <DollarSign className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
          </div>
          <div className={`flex items-center gap-1 text-xs md:text-sm font-medium ${data.revenueChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {data.revenueChange >= 0 ? <TrendingUp className="w-3 h-3 md:w-4 md:h-4" /> : <TrendingDown className="w-3 h-3 md:w-4 md:h-4" />}
            {Math.abs(data.revenueChange)}%
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-xs md:text-sm text-gray-500">Total Pendapatan</p>
          <p className="text-lg md:text-2xl font-bold text-gray-900 break-words">{formatRupiah(data.totalRevenue)}</p>
          <p className="text-[10px] md:text-xs text-gray-400">Bulan ini</p>
        </div>
      </div>

      {/* Tingkat Okupansi */}
      <div className="bg-white rounded-lg md:rounded-xl shadow-sm p-4 md:p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-3 md:mb-4">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-lg flex items-center justify-center">
            <Home className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
          </div>
          <div className="text-xs md:text-sm font-medium text-gray-500">
            {data.roomsOccupied}/{data.totalRooms}
          </div>
        </div>
        <div className="space-y-1 mb-3">
          <p className="text-xs md:text-sm text-gray-500">Tingkat Okupansi</p>
          <p className="text-lg md:text-2xl font-bold text-gray-900">{data.occupancyRate}%</p>
          <p className="text-[10px] md:text-xs text-gray-400">Kamar terisi</p>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full transition-all duration-700 ease-out"
            style={{ width: `${data.occupancyRate}%` }}
          />
        </div>
      </div>

      {/* Pembayaran Tertunda */}
      <div className="bg-white rounded-lg md:rounded-xl shadow-sm p-4 md:p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-3 md:mb-4">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-red-100 rounded-lg flex items-center justify-center">
            <AlertCircle className="w-5 h-5 md:w-6 md:h-6 text-red-600" />
          </div>
          <div className="px-2 py-1 bg-red-100 text-red-700 text-[10px] md:text-xs font-medium rounded-full">
            Urgent
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-xs md:text-sm text-gray-500">Pembayaran Tertunda</p>
          <p className="text-lg md:text-2xl font-bold text-gray-900">{data.pendingPayments}</p>
          <p className="text-[10px] md:text-xs text-red-600 font-medium break-words">{formatRupiah(data.pendingAmount)}</p>
        </div>
      </div>

      {/* Properti Aktif */}
      <div className="bg-white rounded-lg md:rounded-xl shadow-sm p-4 md:p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-3 md:mb-4">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 rounded-lg flex items-center justify-center">
            <Users className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-xs md:text-sm text-gray-500">Properti Aktif</p>
          <p className="text-lg md:text-2xl font-bold text-gray-900">{data.activeProperties}</p>
          <p className="text-[10px] md:text-xs text-gray-400">{data.totalRooms} total kamar</p>
        </div>
      </div>
    </div>
  );
}

function RevenueChart({ data }) {
  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(number);
  };

  const maxRevenue = Math.max(...data.map(d => d.amount));
  const minRevenue = Math.min(...data.map(d => d.amount));
  const range = maxRevenue - minRevenue;

  return (
    <div className="bg-white rounded-lg md:rounded-xl shadow-sm p-4 md:p-6 border border-gray-100">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 md:mb-6 gap-2">
        <div>
          <h3 className="text-base md:text-lg font-semibold text-gray-900">Pendapatan 6 Bulan Terakhir</h3>
          <p className="text-xs md:text-sm text-gray-500 mt-1">Tren pendapatan bulanan</p>
        </div>
      </div>
      
      <div className="relative" style={{ height: '240px' }}>
        <div className="absolute inset-0 flex items-end justify-between gap-1 sm:gap-2 md:gap-3 pb-4 md:pb-6">
          {data.map((item, index) => {
            const heightPercent = range > 0 
              ? Math.max(20, ((item.amount - minRevenue) / range) * 80 + 20)
              : 50;
            
            return (
              <div key={index} className="flex-1 flex flex-col items-center justify-end h-full min-w-0">
                <div 
                  className="w-full relative group cursor-pointer transition-all duration-300 hover:opacity-80"
                  style={{ height: `${heightPercent}%` }}
                >
                  <div className="w-full h-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg"></div>
                  
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-[10px] md:text-xs px-2 md:px-3 py-1 md:py-2 rounded-lg whitespace-nowrap z-10 pointer-events-none">
                    <div className="font-semibold">{formatRupiah(item.amount)}</div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
                  </div>
                </div>
                
                <span className="text-[10px] sm:text-xs md:text-sm font-medium text-gray-600 mt-2 md:mt-3 truncate w-full text-center">{item.month}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function OccupancyChart({ data }) {
  return (
    <div className="bg-white rounded-lg md:rounded-xl shadow-sm p-4 md:p-6 border border-gray-100">
      <div className="mb-4 md:mb-6">
        <h3 className="text-base md:text-lg font-semibold text-gray-900">Okupansi per Properti</h3>
        <p className="text-xs md:text-sm text-gray-500 mt-1">Perbandingan tingkat hunian</p>
      </div>
      <div className="space-y-4 md:space-y-5">
        {data.map((item, index) => (
          <div key={index}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs md:text-sm font-medium text-gray-700 truncate pr-2">{item.name}</span>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="text-[10px] md:text-xs text-gray-500">{item.occupied}/{item.total}</span>
                <span className={`text-[10px] md:text-xs font-semibold ${
                  item.rate === 100 ? 'text-green-600' :
                  item.rate >= 80 ? 'text-blue-600' :
                  item.rate >= 60 ? 'text-yellow-600' :
                  'text-red-600'
                }`}>
                  {item.rate}%
                </span>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 md:h-3 overflow-hidden">
              <div 
                className={`h-2 md:h-3 rounded-full transition-all duration-700 ease-out ${
                  item.rate === 100 ? 'bg-gradient-to-r from-green-500 to-green-400' :
                  item.rate >= 80 ? 'bg-gradient-to-r from-blue-500 to-blue-400' :
                  item.rate >= 60 ? 'bg-gradient-to-r from-yellow-500 to-yellow-400' :
                  'bg-gradient-to-r from-red-500 to-red-400'
                }`}
                style={{ width: `${item.rate}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PaymentTable({ payments }) {
  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(number);
  };

  return (
    <div className="bg-white rounded-lg md:rounded-xl shadow-sm border border-gray-100">
      <div className="px-4 md:px-6 py-3 md:py-4 border-b border-gray-200">
        <h3 className="text-base md:text-lg font-semibold text-gray-900">Pembayaran Mendekati Jatuh Tempo</h3>
        <p className="text-xs md:text-sm text-gray-500 mt-1">Tagihan yang perlu segera ditindaklanjuti</p>
      </div>
      
      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Penyewa</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Properti</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jumlah</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jatuh Tempo</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {payments.map((payment) => (
              <tr key={payment.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{payment.tenant}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{payment.property}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{formatRupiah(payment.amount)}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      payment.daysLeft <= 3 ? 'bg-red-100 text-red-700' :
                      payment.daysLeft <= 7 ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {payment.daysLeft} hari lagi
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    Kirim Reminder
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden divide-y divide-gray-200">
        {payments.map((payment) => (
          <div key={payment.id} className="p-4 hover:bg-gray-50">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-gray-900 truncate">{payment.tenant}</h4>
                <p className="text-xs text-gray-500 mt-0.5">{payment.property}</p>
              </div>
              <span className={`ml-2 px-2 py-1 text-[10px] font-medium rounded-full whitespace-nowrap flex-shrink-0 ${
                payment.daysLeft <= 3 ? 'bg-red-100 text-red-700' :
                payment.daysLeft <= 7 ? 'bg-yellow-100 text-yellow-700' :
                'bg-green-100 text-green-700'
              }`}>
                {payment.daysLeft} hari
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium text-gray-900">{formatRupiah(payment.amount)}</div>
              <button className="text-xs text-blue-600 hover:text-blue-800 font-medium whitespace-nowrap">
                Kirim Reminder
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DashboardSidebar() {
  const notifications = [
    { id: 1, type: 'warning', message: '8 pembayaran jatuh tempo minggu ini' },
    { id: 2, type: 'info', message: '3 penyewa kontrak habis bulan depan' },
    { id: 3, type: 'alert', message: '2 komplain belum ditangani' }
  ];

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Quick Actions */}
      <div className="bg-white rounded-lg md:rounded-xl shadow-sm p-4 md:p-6 border border-gray-100">
        <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">Quick Actions</h3>
        <div className="space-y-2">
          <button className="w-full flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-3 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg transition-colors text-sm md:text-base">
            <Plus className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
            <span className="font-medium truncate">Tambah Penyewa Baru</span>
          </button>
          <button className="w-full flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-3 bg-green-50 hover:bg-green-100 text-green-700 rounded-lg transition-colors text-sm md:text-base">
            <DollarSign className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
            <span className="font-medium truncate">Catat Pembayaran</span>
          </button>
          <button className="w-full flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-3 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-lg transition-colors text-sm md:text-base">
            <Home className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
            <span className="font-medium truncate">Tambah Properti</span>
          </button>
          <button className="w-full flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-3 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg transition-colors text-sm md:text-base">
            <FileText className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
            <span className="font-medium truncate">Lihat Laporan</span>
          </button>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-white rounded-lg md:rounded-xl shadow-sm p-4 md:p-6 border border-gray-100">
        <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">Notifikasi</h3>
        <div className="space-y-3">
          {notifications.map((notif) => (
            <div 
              key={notif.id}
              className={`flex items-start gap-2 md:gap-3 p-2 md:p-3 rounded-lg ${
                notif.type === 'warning' ? 'bg-yellow-50' :
                notif.type === 'alert' ? 'bg-red-50' :
                'bg-blue-50'
              }`}
            >
              <AlertCircle className={`w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0 ${
                notif.type === 'warning' ? 'text-yellow-600' :
                notif.type === 'alert' ? 'text-red-600' :
                'text-blue-600'
              }`} />
              <p className="text-xs md:text-sm text-gray-700">{notif.message}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Calendar Widget */}
      <div className="bg-white rounded-lg md:rounded-xl shadow-sm p-4 md:p-6 border border-gray-100">
        <div className="flex items-center gap-2 mb-3 md:mb-4">
          <Calendar className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
          <h3 className="text-base md:text-lg font-semibold text-gray-900">Hari Ini</h3>
        </div>
        <div className="text-center py-3 md:py-4">
          <p className="text-2xl md:text-3xl font-bold text-gray-900">15</p>
          <p className="text-xs md:text-sm text-gray-500 mt-1">Desember 2024</p>
          <p className="text-[10px] md:text-xs text-gray-400 mt-1">Senin</p>
        </div>
      </div>
    </div>
  );
}

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
  { id: 1, tenant: "Ahmad Saputra", property: "Kos Mawar", amount: 1200000, dueDate: "2024-12-18", daysLeft: 3 },
  { id: 2, tenant: "Siti Nurhaliza", property: "Kos Melati", amount: 900000, dueDate: "2024-12-19", daysLeft: 4 },
  { id: 3, tenant: "Budi Santoso", property: "Kos Anggrek", amount: 1100000, dueDate: "2024-12-20", daysLeft: 5 },
];

/* ================== MAIN COMPONENT ================== */
export default function Dashboard() {
  const [timeRange, setTimeRange] = useState("6months");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 py-4">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-sm text-gray-500">Monitoring bisnis kos Anda</p>
          </div>

          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="w-full md:w-48 px-4 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 bg-white"
          >
            <option value="1month">Bulan Ini</option>
            <option value="3months">3 Bulan</option>
            <option value="6months">6 Bulan</option>
            <option value="1year">Tahun Ini</option>
          </select>
        </div>

        {/* MAIN LAYOUT - FIX SCROLL */}
        <div className="flex flex-col xl:flex-row gap-6">
          {/* LEFT: MAIN CONTENT */}
          <div className="flex-1 space-y-6 min-w-0">
            {/* Summary Cards */}
            <SummaryCards data={summaryData} />

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RevenueChart data={revenueData} />
              <OccupancyChart data={occupancyData} />
            </div>

            {/* Payment Table */}
            <PaymentTable payments={upcomingPayments} />
          </div>

          {/* RIGHT: STICKY SIDEBAR */}
          <aside className="hidden xl:block xl:w-[360px] flex-shrink-0">
            <div className="sticky top-6">
              <DashboardSidebar />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}