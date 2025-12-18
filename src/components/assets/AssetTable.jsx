export default function AssetTable({ assets }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "good":
        return "text-green-700 bg-green-50";
      case "maintenance":
        return "text-yellow-700 bg-yellow-50";
      case "inactive":
        return "text-red-700 bg-red-50";
      default:
        return "text-gray-700 bg-gray-50";
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case "good":
        return "Baik";
      case "maintenance":
        return "Perlu Perbaikan";
      case "inactive":
        return "Tidak Aktif";
      default:
        return status;
    }
  };

  return (
    <div className="hidden lg:block bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Nama Aset
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Kode
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Properti
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Kategori
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Status
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Lokasi
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {assets.map((asset) => (
              <tr key={asset.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {asset.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{asset.assetCode}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{asset.property}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{asset.category}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                      asset.status
                    )}`}
                  >
                    {getStatusLabel(asset.status)}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{asset.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
