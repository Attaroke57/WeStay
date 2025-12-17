import { useState } from "react";
import { Plus, Search, MapPin, DollarSign, Edit, Trash2, Home, Filter } from "lucide-react";

const properties = [
  {
    id: 1,
    name: "Kos Mawar",
    location: "Jakarta Selatan",
    address: "Jl. Raya Kebayoran No. 123",
    price: 1200000,
    rooms: { total: 15, occupied: 12, available: 3 },
    status: "Available",
    type: "Putra",
    facilities: ["WiFi", "AC", "Kamar Mandi Dalam"],
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400"
  },
  {
    id: 2,
    name: "Kos Melati",
    location: "Bandung",
    address: "Jl. Dago No. 45",
    price: 900000,
    rooms: { total: 10, occupied: 8, available: 2 },
    status: "Available",
    type: "Putri",
    facilities: ["WiFi", "Dapur Bersama"],
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400"
  },
  {
    id: 3,
    name: "Kos Anggrek",
    location: "Jakarta Pusat",
    address: "Jl. Sudirman No. 78",
    price: 1100000,
    rooms: { total: 8, occupied: 7, available: 1 },
    status: "Available",
    type: "Campur",
    facilities: ["WiFi", "AC", "Parkir Motor"],
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400"
  },
  {
    id: 4,
    name: "Kos Mitra",
    location: "Kudus",
    address: "Jl. Bae-Besito, Besito Kulon, Jurang, Kec. Gebog, Kabupaten Kudus, Jawa Tengah 59333",
    price: 750000,
    rooms: { total: 5, occupied: 5, available: 0 },
    status: "Full",
    type: "Putri",
    facilities: ["WiFi", "Laundry"],
    image: "https://infokost.id/kost/dekat-rs-mitra-keluarga-kemayoran/71"

  },
  {
    id: 5,
    name: "Kos Pak Rukan",
    location: "Kudus",
    address: "Jl. Besito - Gebog Gg. 10, wetan kali, Besito, Kec. Gebog, Kabupaten Kudus, Jawa Tengah 59333",
    price: 850000,
    rooms: { total: 2, occupied: 2, available: 0 },
    status: "Full",
    type: "Putra",
    facilities: ["WiFi", "AC"],
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400"
  }
];

export default function Properties() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [viewMode, setViewMode] = useState("grid"); // grid or table

  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(number);
  };

  const filteredProperties = properties.filter(property => {
    const matchSearch = property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       property.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchStatus = filterStatus === "all" || 
                       (filterStatus === "available" && property.status === "Available") ||
                       (filterStatus === "full" && property.status === "Full");
    return matchSearch && matchStatus;
  });

  const stats = {
    total: properties.length,
    available: properties.filter(p => p.status === "Available").length,
    full: properties.filter(p => p.status === "Full").length,
    totalRooms: properties.reduce((sum, p) => sum + p.rooms.total, 0),
    occupiedRooms: properties.reduce((sum, p) => sum + p.rooms.occupied, 0)
  };

  return (
    <div className="w-full">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Manajemen Properti</h1>
            <p className="text-sm text-gray-500 mt-1">Kelola semua properti kos Anda</p>
          </div>
          <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium">
            <Plus className="w-5 h-5" />
            <span>Tambah Properti</span>
          </button>
        </div>

        {/* STATS CARDS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Total Properti</p>
                <p className="text-xl font-bold text-gray-900">{stats.total}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Tersedia</p>
                <p className="text-xl font-bold text-gray-900">{stats.available}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Penuh</p>
                <p className="text-xl font-bold text-gray-900">{stats.full}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Okupansi</p>
                <p className="text-xl font-bold text-gray-900">
                  {Math.round((stats.occupiedRooms / stats.totalRooms) * 100)}%
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FILTERS & SEARCH */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Cari properti atau lokasi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filter Status */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">Semua Status</option>
                <option value="available">Tersedia</option>
                <option value="full">Penuh</option>
              </select>
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2 border border-gray-300 rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  viewMode === "grid" ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode("table")}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  viewMode === "table" ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Table
              </button>
            </div>
          </div>
        </div>

        {/* GRID VIEW */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                {/* Image */}
                <div className="relative h-48 bg-gray-200">
                  <img src={property.image} alt={property.name} className="w-full h-full object-cover" />
                  <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      property.status === "Available" 
                        ? "bg-green-500 text-white" 
                        : "bg-red-500 text-white"
                    }`}>
                      {property.status === "Available" ? "Tersedia" : "Penuh"}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{property.name}</h3>
                  
                  <div className="flex items-start gap-2 text-sm text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">{property.location}</p>
                      <p className="text-xs text-gray-500">{property.address}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <DollarSign className="w-4 h-4 text-gray-400" />
                    <p className="text-lg font-bold text-blue-600">{formatRupiah(property.price)}</p>
                    <span className="text-xs text-gray-500">/bulan</span>
                  </div>

                  {/* Room Stats */}
                  <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Total</p>
                      <p className="text-sm font-bold text-gray-900">{property.rooms.total}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Terisi</p>
                      <p className="text-sm font-bold text-green-600">{property.rooms.occupied}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Kosong</p>
                      <p className="text-sm font-bold text-blue-600">{property.rooms.available}</p>
                    </div>
                  </div>

                  {/* Facilities */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {property.facilities.map((facility, idx) => (
                      <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">
                        {facility}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium">
                      <Edit className="w-4 h-4" />
                      Edit
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors text-sm font-medium">
                      <Trash2 className="w-4 h-4" />
                      Hapus
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TABLE VIEW */}
        {viewMode === "table" && (
          <>
            {/* Desktop Table */}
            <div className="hidden md:block bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Properti</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lokasi</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Harga</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kamar</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredProperties.map((property) => (
                      <tr key={property.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-3">
                            <img src={property.image} alt={property.name} className="w-12 h-12 rounded-lg object-cover" />
                            <div>
                              <p className="text-sm font-medium text-gray-900">{property.name}</p>
                              <p className="text-xs text-gray-500">{property.type}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <p className="text-sm text-gray-900">{property.location}</p>
                          <p className="text-xs text-gray-500">{property.address}</p>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <p className="text-sm font-semibold text-gray-900">{formatRupiah(property.price)}</p>
                          <p className="text-xs text-gray-500">/bulan</p>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm">
                            <span className="font-medium text-gray-900">{property.rooms.occupied}</span>
                            <span className="text-gray-500">/{property.rooms.total}</span>
                          </div>
                          <p className="text-xs text-gray-500">{property.rooms.available} tersedia</p>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            property.status === "Available" 
                              ? "bg-green-100 text-green-700" 
                              : "bg-red-100 text-red-700"
                          }`}>
                            {property.status === "Available" ? "Tersedia" : "Penuh"}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              {filteredProperties.map((property) => (
                <div key={property.id} className="bg-white rounded-lg border border-gray-200 p-4">
                  <div className="flex gap-3 mb-3">
                    <img src={property.image} alt={property.name} className="w-20 h-20 rounded-lg object-cover flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-bold text-gray-900 truncate">{property.name}</h3>
                      <p className="text-xs text-gray-500 truncate">{property.location}</p>
                      <p className="text-sm font-semibold text-blue-600 mt-1">{formatRupiah(property.price)}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold h-fit ${
                      property.status === "Available" 
                        ? "bg-green-100 text-green-700" 
                        : "bg-red-100 text-red-700"
                    }`}>
                      {property.status === "Available" ? "Tersedia" : "Penuh"}
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-3 p-2 bg-gray-50 rounded-lg text-xs">
                    <span>Total: <strong>{property.rooms.total}</strong></span>
                    <span>Terisi: <strong className="text-green-600">{property.rooms.occupied}</strong></span>
                    <span>Kosong: <strong className="text-blue-600">{property.rooms.available}</strong></span>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-blue-600 text-white rounded-lg text-sm">
                      <Edit className="w-4 h-4" />
                      Edit
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-red-600 text-white rounded-lg text-sm">
                      <Trash2 className="w-4 h-4" />
                      Hapus
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Empty State */}
        {filteredProperties.length === 0 && (
          <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
            <Home className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Tidak ada properti ditemukan</h3>
            <p className="text-gray-500 mb-4">Coba ubah filter atau kata kunci pencarian Anda</p>
            <button 
              onClick={() => { setSearchQuery(""); setFilterStatus("all"); }}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Reset Filter
            </button>
          </div>
        )}
      </div>
    </div>
  );
}