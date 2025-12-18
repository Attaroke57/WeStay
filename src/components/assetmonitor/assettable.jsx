// src/components/assetmonitor/AssetTable.jsx
export default function AssetTable({ assets }) {
  return (
    <div className="bg-white rounded-lg shadow overflow-x-auto mb-6">
      <table className="w-full text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3">Kode</th>
            <th className="p-3">Nama</th>
            <th className="p-3">Properti</th>
            <th className="p-3">Lokasi</th>
            <th className="p-3">Kategori</th>
            <th className="p-3">Status</th>
            <th className="p-3">Nilai</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((a) => (
            <tr key={a.id} className="border-t hover:bg-gray-50">
              <td className="p-3">{a.assetCode}</td>
              <td className="p-3">{a.name}</td>
              <td className="p-3">{a.property}</td>
              <td className="p-3">{a.location}</td>
              <td className="p-3">{a.category}</td>
              <td className="p-3">{a.status}</td>
              <td className="p-3">Rp {a.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
