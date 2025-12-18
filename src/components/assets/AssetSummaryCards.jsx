export default function AssetSummaryCards({ stats }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <p className="text-sm text-gray-600">Total Aset</p>
        <p className="text-2xl font-bold text-gray-900 mt-1">{stats.total || 0}</p>
      </div>
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <p className="text-sm text-gray-600">Dalam Kondisi Baik</p>
        <p className="text-2xl font-bold text-green-600 mt-1">{stats.good || 0}</p>
      </div>
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <p className="text-sm text-gray-600">Memerlukan Perbaikan</p>
        <p className="text-2xl font-bold text-yellow-600 mt-1">{stats.maintenance || 0}</p>
      </div>
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <p className="text-sm text-gray-600">Tidak Aktif</p>
        <p className="text-2xl font-bold text-red-600 mt-1">{stats.inactive || 0}</p>
      </div>
    </div>
  );
}
