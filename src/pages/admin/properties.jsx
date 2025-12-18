import { useState, useEffect } from "react";
import {
  Plus,
  Search,
  MapPin,
  DollarSign,
  Edit,
  Trash2,
  Home,
  Filter,
  Loader,
} from "lucide-react";
import { propertyService } from "../../services/propertyService";

// ============= MODAL COMPONENT =============

function PropertyModal({ isOpen, property, onClose, onSave, isLoading }) {
  const [formData, setFormData] = useState({
    nama: "",
    lokasi: "",
    harga_per_bulan: "",
    jumlah_kamar: "",
    jumlah_kamar_mandi: "",
    fasilitas: [],
    deskripsi: "",
  });

  useEffect(() => {
    if (property) {
      setFormData(property);
    } else {
      setFormData({
        nama: "",
        lokasi: "",
        harga_per_bulan: "",
        jumlah_kamar: "",
        jumlah_kamar_mandi: "",
        fasilitas: [],
        deskripsi: "",
      });
    }
  }, [property, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFacilitiesChange = (e) => {
    const facilities = e.target.value
      .split(",")
      .map((f) => f.trim())
      .filter((f) => f);
    setFormData((prev) => ({
      ...prev,
      fasilitas: facilities,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900">
            {property ? "Edit Properti" : "Tambah Properti"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nama Properti
            </label>
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              placeholder="Contoh: Kos Mawar"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Lokasi
            </label>
            <input
              type="text"
              name="lokasi"
              value={formData.lokasi}
              onChange={handleChange}
              placeholder="Contoh: Jakarta Selatan"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Harga per Bulan (IDR)
            </label>
            <input
              type="number"
              name="harga_per_bulan"
              value={formData.harga_per_bulan}
              onChange={handleChange}
              placeholder="Contoh: 1200000"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Jumlah Kamar
              </label>
              <input
                type="number"
                name="jumlah_kamar"
                value={formData.jumlah_kamar}
                onChange={handleChange}
                placeholder="15"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Kamar Mandi
              </label>
              <input
                type="number"
                name="jumlah_kamar_mandi"
                value={formData.jumlah_kamar_mandi}
                onChange={handleChange}
                placeholder="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Fasilitas (pisahkan dengan koma)
            </label>
            <input
              type="text"
              value={formData.fasilitas?.join(", ") || ""}
              onChange={handleFacilitiesChange}
              placeholder="WiFi, AC, Kamar Mandi Dalam"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Deskripsi
            </label>
            <textarea
              name="deskripsi"
              value={formData.deskripsi}
              onChange={handleChange}
              placeholder="Deskripsi properti..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows="3"
            />
          </div>

          <div className="flex gap-2 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Batal
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isLoading && <Loader className="w-4 h-4 animate-spin" />}
              {property ? "Update" : "Tambah"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ============= MAIN COMPONENT =============
export default function Properties() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ============= FETCH DATA =============
  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await propertyService.getAllProperties();
      setProperties(data);
    } catch (err) {
      setError(err.message || "Gagal mengambil data properti");
      console.error("Error fetching properties:", err);
    } finally {
      setLoading(false);
    }
  };

  // ============= HANDLERS =============
  const handleAddProperty = () => {
    setSelectedProperty(null);
    setIsModalOpen(true);
  };

  const handleEditProperty = (property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const handleDeleteProperty = async (id) => {
    if (!window.confirm("Apakah Anda yakin ingin menghapus properti ini?"))
      return;

    try {
      setIsSubmitting(true);
      await propertyService.deleteProperty(id);
      setProperties(properties.filter((p) => p.id !== id));
      alert("Properti berhasil dihapus");
    } catch (err) {
      alert("Gagal menghapus properti: " + err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSaveProperty = async (formData) => {
    try {
      setIsSubmitting(true);

      if (selectedProperty?.id) {
        // Update
        await propertyService.updateProperty(selectedProperty.id, formData);
        setProperties(
          properties.map((p) =>
            p.id === selectedProperty.id ? { ...p, ...formData } : p
          )
        );
        alert("Properti berhasil diupdate");
      } else {
        // Create
        const newProperty = await propertyService.createProperty(formData);
        setProperties([...properties, newProperty.data]);
        alert("Properti berhasil ditambahkan");
      }

      setIsModalOpen(false);
      setSelectedProperty(null);
    } catch (err) {
      alert("Gagal menyimpan properti: " + err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  // ============= FILTERS & FORMATTING =============
  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  const filteredProperties = properties.filter((property) => {
    const matchSearch =
      property.nama?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.lokasi?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchSearch;
  });

  const stats = {
    total: properties.length,
    totalRooms: properties.reduce((sum, p) => sum + (p.jumlah_kamar || 0), 0),
  };

  // ============= RENDER =============
  return (
    <div className="w-full">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Manajemen Properti
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Kelola semua properti kos Anda
            </p>
          </div>
          <button
            onClick={handleAddProperty}
            className="flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
          >
            <Plus className="w-5 h-5" />
            <span>Tambah Properti</span>
          </button>
        </div>

        {/* ERROR MESSAGE */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
            <div className="flex-1">
              <p className="text-sm font-medium text-red-800">{error}</p>
            </div>
            <button
              onClick={fetchProperties}
              className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
            >
              Coba Lagi
            </button>
          </div>
        )}

        {/* STATS CARDS */}
        {!loading && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Home className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Total Properti</p>
                  <p className="text-xl font-bold text-gray-900">
                    {stats.total}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Home className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Total Kamar</p>
                  <p className="text-xl font-bold text-gray-900">
                    {stats.totalRooms}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Home className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Status</p>
                  <p className="text-xl font-bold text-gray-900">Online</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Home className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">API Status</p>
                  <p className="text-xl font-bold text-gray-900">✓ Connected</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FILTERS & SEARCH */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
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

            <div className="flex items-center gap-2 border border-gray-300 rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  viewMode === "grid"
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode("table")}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  viewMode === "table"
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Table
              </button>
            </div>
          </div>
        </div>

        {/* LOADING STATE */}
        {loading && (
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <Loader className="w-8 h-8 text-blue-600 animate-spin mx-auto mb-4" />
              <p className="text-gray-600">Mengambil data properti...</p>
            </div>
          </div>
        )}

        {/* GRID VIEW */}
        {!loading && viewMode === "grid" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 bg-gray-200">
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                    <Home className="w-16 h-16 text-white opacity-50" />
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500 text-white">
                      {property.status}
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {property.nama}
                  </h3>

                  <div className="flex items-start gap-2 text-sm text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">{property.lokasi}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <DollarSign className="w-4 h-4 text-gray-400" />
                    <p className="text-lg font-bold text-blue-600">
                      {formatRupiah(property.harga_per_bulan)}
                    </p>
                    <span className="text-xs text-gray-500">/bulan</span>
                  </div>

                  <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Kamar</p>
                      <p className="text-sm font-bold text-gray-900">
                        {property.jumlah_kamar || "-"}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Kamar Mandi</p>
                      <p className="text-sm font-bold text-gray-900">
                        {property.jumlah_kamar_mandi || "-"}
                      </p>
                    </div>
                  </div>

                  {property.fasilitas && property.fasilitas.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {property.fasilitas.map((facility, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded"
                        >
                          {facility}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEditProperty(property)}
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium"
                    >
                      <Edit className="w-4 h-4" />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteProperty(property.id)}
                      disabled={isSubmitting}
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors text-sm font-medium disabled:opacity-50"
                    >
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
        {!loading && viewMode === "table" && (
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Properti
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Lokasi
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Harga
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Kamar
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredProperties.map((property) => (
                    <tr key={property.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <p className="text-sm font-medium text-gray-900">
                          {property.nama}
                        </p>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <p className="text-sm text-gray-900">
                          {property.lokasi}
                        </p>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <p className="text-sm font-semibold text-gray-900">
                          {formatRupiah(property.harga_per_bulan)}
                        </p>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <p className="text-sm text-gray-900">
                          {property.jumlah_kamar} kamar
                        </p>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleEditProperty(property)}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteProperty(property.id)}
                            disabled={isSubmitting}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
                          >
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
        )}

        {/* EMPTY STATE */}
        {!loading && filteredProperties.length === 0 && (
          <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
            <Home className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Tidak ada properti ditemukan
            </h3>
            <p className="text-gray-500 mb-4">
              Coba ubah filter atau kata kunci pencarian Anda
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Reset Filter
            </button>
          </div>
        )}
      </div>

      {/* MODAL */}
      <PropertyModal
        isOpen={isModalOpen}
        property={selectedProperty}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProperty(null);
        }}
        onSave={handleSaveProperty}
        isLoading={isSubmitting}
      />
    </div>
  );
}
