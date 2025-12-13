const properties = [
  {
    id: 1,
    name: "Kos Mawar",
    location: "Jakarta",
    price: "1.200.000",
    status: "Available",
  },
  {
    id: 2,
    name: "Kos Melati",
    location: "Bandung",
    price: "900.000",
    status: "Booked",
  },
]

export default function Properties() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Manajemen Properti</h1>

      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Nama</th>
              <th className="p-3">Lokasi</th>
              <th className="p-3">Harga</th>
              <th className="p-3">Status</th>
              <th className="p-3">Aksi</th>
            </tr>
          </thead>

          <tbody>
            {properties.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="p-3">{item.name}</td>
                <td className="p-3">{item.location}</td>
                <td className="p-3">Rp {item.price}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-sm ${
                      item.status === "Available"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="p-3 space-x-2">
                  <button className="px-3 py-1 bg-blue-500 text-white rounded">
                    Edit
                  </button>
                  <button className="px-3 py-1 bg-red-500 text-white rounded">
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
