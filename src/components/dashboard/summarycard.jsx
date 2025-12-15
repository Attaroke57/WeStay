// src/components/dashboard/SummaryCards.jsx
import { TrendingUp, TrendingDown, Home, AlertCircle, DollarSign, Users } from 'lucide-react';

export default function SummaryCards({ data }) {
  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(number);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {/* Total Pendapatan */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <DollarSign className="w-6 h-6 text-blue-600" />
          </div>
          <div className={`flex items-center gap-1 text-sm font-medium ${data.revenueChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {data.revenueChange >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
            {Math.abs(data.revenueChange)}%
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-gray-500">Total Pendapatan</p>
          <p className="text-2xl font-bold text-gray-900">{formatRupiah(data.totalRevenue)}</p>
          <p className="text-xs text-gray-400">Bulan ini</p>
        </div>
      </div>

      {/* Tingkat Okupansi */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
            <Home className="w-6 h-6 text-green-600" />
          </div>
          <div className="text-sm font-medium text-gray-500">
            {data.roomsOccupied}/{data.totalRooms}
          </div>
        </div>
        <div className="space-y-1 mb-3">
          <p className="text-sm text-gray-500">Tingkat Okupansi</p>
          <p className="text-2xl font-bold text-gray-900">{data.occupancyRate}%</p>
          <p className="text-xs text-gray-400">Kamar terisi</p>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full transition-all duration-700 ease-out"
            style={{ width: `${data.occupancyRate}%` }}
          />
        </div>
      </div>

      {/* Pembayaran Tertunda */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
            <AlertCircle className="w-6 h-6 text-red-600" />
          </div>
          <div className="px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">
            Urgent
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-gray-500">Pembayaran Tertunda</p>
          <p className="text-2xl font-bold text-gray-900">{data.pendingPayments}</p>
          <p className="text-xs text-red-600 font-medium">{formatRupiah(data.pendingAmount)}</p>
        </div>
      </div>

      {/* Properti Aktif */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
            <Users className="w-6 h-6 text-purple-600" />
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-gray-500">Properti Aktif</p>
          <p className="text-2xl font-bold text-gray-900">{data.activeProperties}</p>
          <p className="text-xs text-gray-400">{data.totalRooms} total kamar</p>
        </div>
      </div>
    </div>
  );
}