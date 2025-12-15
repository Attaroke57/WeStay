// src/components/dashboard/DashboardSidebar.jsx
import { Plus, DollarSign, Home, FileText, AlertCircle, Calendar } from 'lucide-react';

const notifications = [
  { id: 1, type: 'warning', message: '8 pembayaran jatuh tempo minggu ini' },
  { id: 2, type: 'info', message: '3 penyewa kontrak habis bulan depan' },
  { id: 3, type: 'alert', message: '2 komplain belum ditangani' }
];

export default function DashboardSidebar() {
  return (
    <div className="w-80 space-y-6">
      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg transition-colors">
            <Plus className="w-5 h-5" />
            <span className="font-medium">Tambah Penyewa Baru</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-green-50 hover:bg-green-100 text-green-700 rounded-lg transition-colors">
            <DollarSign className="w-5 h-5" />
            <span className="font-medium">Catat Pembayaran</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-lg transition-colors">
            <Home className="w-5 h-5" />
            <span className="font-medium">Tambah Properti</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg transition-colors">
            <FileText className="w-5 h-5" />
            <span className="font-medium">Lihat Laporan</span>
          </button>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Notifikasi</h3>
        <div className="space-y-3">
          {notifications.map((notif) => (
            <div 
              key={notif.id}
              className={`flex items-start gap-3 p-3 rounded-lg ${
                notif.type === 'warning' ? 'bg-yellow-50' :
                notif.type === 'alert' ? 'bg-red-50' :
                'bg-blue-50'
              }`}
            >
              <AlertCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                notif.type === 'warning' ? 'text-yellow-600' :
                notif.type === 'alert' ? 'text-red-600' :
                'text-blue-600'
              }`} />
              <p className="text-sm text-gray-700">{notif.message}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Calendar Widget */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-5 h-5 text-gray-600" />
          <h3 className="text-lg font-semibold text-gray-900">Hari Ini</h3>
        </div>
        <div className="text-center py-4">
          <p className="text-3xl font-bold text-gray-900">15</p>
          <p className="text-sm text-gray-500 mt-1">Desember 2024</p>
          <p className="text-xs text-gray-400 mt-1">Senin</p>
        </div>
      </div>
    </div>
  );
}