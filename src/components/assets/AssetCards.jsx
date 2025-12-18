export default function AssetCards({ assets }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "good":
        return "border-green-200 bg-green-50";
      case "maintenance":
        return "border-yellow-200 bg-yellow-50";
      case "inactive":
        return "border-red-200 bg-red-50";
      default:
        return "border-gray-200 bg-gray-50";
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
    <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
      {assets.map((asset) => (
        <div
          key={asset.id}
          className={`rounded-lg border p-4 ${getStatusColor(asset.status)}`}
        >
          <div className="mb-3">
            <h4 className="font-semibold text-gray-900 text-sm">{asset.name}</h4>
            <p className="text-xs text-gray-600 mt-1">Kode: {asset.assetCode}</p>
          </div>

          <div className="space-y-2 text-xs text-gray-700">
            <p>
              <span className="font-medium">Properti:</span> {asset.property}
            </p>
            <p>
              <span className="font-medium">Kategori:</span> {asset.category}
            </p>
            <p>
              <span className="font-medium">Lokasi:</span> {asset.location}
            </p>
          </div>

          <div className="mt-3">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold border border-current">
              {getStatusLabel(asset.status)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
