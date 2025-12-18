// src/components/assetmonitor/AssetFilters.jsx
export default function AssetFilters({
  searchQuery,
  setSearchQuery,
  filterProperty,
  setFilterProperty,
  filterStatus,
  setFilterStatus,
  filterCategory,
  setFilterCategory,
  properties = [],
  categories = []
}) {
  return (
    <div className="bg-white rounded-lg p-4 border border-gray-200">
      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Cari aset, kode, lokasi..."
          className="w-full sm:w-64 px-3 py-2 border border-gray-300 rounded-lg text-sm"
        />

        <select
          value={filterProperty}
          onChange={(e) => setFilterProperty(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
        >
          <option value="all">Semua Properti</option>
          {properties.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>

        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
        >
          <option value="all">Semua Status</option>
          <option value="good">Baik</option>
          <option value="needCheck">Perlu Dicek</option>
          <option value="broken">Rusak</option>
        </select>

        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
        >
          <option value="all">Semua Kategori</option>
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
