// src/components/assets/AssetSummaryCards.jsx
import { Package, CheckCircle, AlertCircle, XCircle, Wrench, DollarSign } from 'lucide-react';

export default function AssetSummaryCards({ stats }) {
  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(number);
  };

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 md:gap-4">
      {/* Total Aset */}
      <div className="bg-white rounded-lg p-4 border border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Package className="w-5 h-5 text-blue-600" />
          </div>
          <div className="min-w-0">
            <p className="text-xs text-gray-500 truncate">Total Aset</p>
            <p className="text-xl font-bold text-gray-900">{stats.total}</p>
          </div>
        </div>
      </div>

      {/* Kondisi Baik */}
      <div className="bg-white rounded-lg p-4 border border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <CheckCircle className="w-5 h-5 text-green-600" />
          </div>
          <div className="min-w-0">
            <p className="text-xs text-gray-500 truncate">Baik</p>
            <p className="text-xl font-bold text-gray-900">{stats.good}</p>
          </div>
        </div>
      </div>

      {/* Perlu Dicek */}
      <div className="bg-white rounded-lg p-4 border border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <AlertCircle className="w-5 h-5 text-yellow-600" />
          </div>
          <div className="min-w-0">
            <p className="text-xs text-gray-500 truncate">Perlu Dicek</p>
            <p className="text-xl font-bold text-gray-900">{stats.needCheck}</p>
          </div>
        </div>
      </div>

      {/* Rusak */}
      <div className="bg-white rounded-lg p-4 border border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <XCircle className="w-5 h-5 text-red-600" />
          </div>
          <div className="min-w-0">
            <p className="text-xs text-gray-500 truncate">Rusak</p>
            <p className="text-xl font-bold text-gray-900">{stats.broken}</p>
          </div>
        </div>
      </div>

      {/* Dalam Perbaikan */}
      <div className="bg-white rounded-lg p-4 border border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Wrench className="w-5 h-5 text-blue-600" />
          </div>
          <div className="min-w-0">
            <p className="text-xs text-gray-500 truncate">Perbaikan</p>
            <p className="text-xl font-bold text-gray-900">{stats.maintenance}</p>
          </div>
        </div>
      </div>

      {/* Total Nilai */}
      <div className="bg-white rounded-lg p-4 border border-gray-200 col-span-2 lg:col-span-3 xl:col-span-1">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <DollarSign className="w-5 h-5 text-purple-600" />
          </div>
          <div className="min-w-0">
            <p className="text-xs text-gray-500 truncate">Total Nilai</p>
            <p className="text-sm md:text-base font-bold text-gray-900 truncate">
              {formatRupiah(stats.totalValue)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}