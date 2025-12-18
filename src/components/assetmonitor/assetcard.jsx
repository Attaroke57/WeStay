// src/components/assets/AssetCards.jsx
import { MapPin, Calendar, Tag, Edit, Trash2, Eye } from 'lucide-react';
import { assetStatuses } from '../../data/assetsData';

export default function AssetCards({ assets }) {
  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(number);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const getStatusBadge = (status) => {
    const statusInfo = assetStatuses[status];
    const colorClasses = {
      green: 'bg-green-100 text-green-700',
      yellow: 'bg-yellow-100 text-yellow-700',
      red: 'bg-red-100 text-red-700',
      blue: 'bg-blue-100 text-blue-700'
    };

    return (
      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${colorClasses[statusInfo.color]}`}>
        {statusInfo.label}
      </span>
    );
  };

  return (
    <div className="lg:hidden space-y-4">
      {assets.map((asset) => (
        <div key={asset.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          {/* Header dengan gambar */}
          <div className="flex gap-3 p-4 border-b border-gray-100">
            <img 
              src={asset.image} 
              alt={asset.name} 
              className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-gray-900 truncate">
                    {asset.name}
                  </h3>
                  <p className="text-xs text-gray-500">{asset.category}</p>
                </div>
                {getStatusBadge(asset.status)}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-gray-700 bg-gray-100 px-2 py-1 rounded">
                  {asset.assetCode}
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 space-y-3">
            {/* Lokasi */}
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">{asset.property}</p>
                <p className="text-xs text-gray-500">{asset.location}</p>
              </div>
            </div>

            {/* Tanggal Pengecekan */}
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gray-400 flex-shrink-0" />
              <div className="text-xs text-gray-600">
                <span className="font-medium">Cek terakhir:</span> {formatDate(asset.lastChecked)}
              </div>
            </div>

            {/* Nilai */}
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-gray-400 flex-shrink-0" />
              <div className="text-xs text-gray-600">
                <span className="font-medium">Nilai:</span>{' '}
                <span className="font-semibold text-gray-900">
                  {formatRupiah(asset.purchasePrice)}
                </span>
              </div>
            </div>

            {/* Kondisi */}
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs font-medium text-gray-700 mb-1">Kondisi:</p>
              <p className="text-xs text-gray-600 leading-relaxed">{asset.condition}</p>
            </div>

            {/* Actions */}
            <div className="flex gap-2 pt-2">
              <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium">
                <Eye className="w-4 h-4" />
                Detail
              </button>
              <button className="flex items-center justify-center px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
                <Edit className="w-4 h-4" />
              </button>
              <button className="flex items-center justify-center px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}