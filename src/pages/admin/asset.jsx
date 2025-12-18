// src/pages/admin/assets.jsx
import { useState } from "react";
import { Plus, Download, Upload } from "lucide-react";
import AssetSummaryCards from "../../components/assets/AssetSummaryCards";
import AssetFilters from "../../components/assets/AssetFilters";
import AssetTable from "../../components/assets/AssetTable";
import AssetCards from "../../components/assets/AssetCards";
import { 
  assets, 
  assetCategories, 
  getAssetStats, 
  getUniqueProperties 
} from "../../data/assetsData";

export default function Assets() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterProperty, setFilterProperty] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");

  // Get statistics
  const stats = getAssetStats();

  // Get unique properties
  const properties = getUniqueProperties();

  // Debug log
  console.log("Assets loaded:", assets);
  console.log("Total assets:", assets.length);

  // Filter assets
  const filteredAssets = assets.filter(asset => {
    const matchSearch = 
      asset.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asset.assetCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asset.property.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asset.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asset.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchProperty = filterProperty === "all" || asset.property === filterProperty;
    const matchStatus = filterStatus === "all" || asset.status === filterStatus;
    const matchCategory = filterCategory === "all" || asset.category === filterCategory;

    return matchSearch && matchProperty && matchStatus && matchCategory;
  });

  const handleReset = () => {
    setSearchQuery("");
    setFilterProperty("all");
    setFilterStatus("all");
    setFilterCategory("all");
  };

  return (
    <div className="w-full">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Monitor Aset</h1>
            <p className="text-sm text-gray-500 mt-1">
              Kelola dan pantau kondisi semua aset properti
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 rounded-lg transition-colors font-medium text-sm">
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Export</span>
            </button>
            <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 rounded-lg transition-colors font-medium text-sm">
              <Upload className="w-4 h-4" />
              <span className="hidden sm:inline">Import</span>
            </button>
            <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium text-sm">
              <Plus className="w-5 h-5" />
              <span>Tambah Aset</span>
            </button>
          </div>
        </div>

        {/* SUMMARY CARDS */}
        <div className="mb-6">
          <AssetSummaryCards stats={stats} />
        </div>

        {/* FILTERS */}
        <div className="mb-6">
          <AssetFilters
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            filterProperty={filterProperty}
            setFilterProperty={setFilterProperty}
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
            filterCategory={filterCategory}
            setFilterCategory={setFilterCategory}
            properties={properties}
            categories={assetCategories}
          />
        </div>

        {/* RESULTS INFO */}
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Menampilkan <span className="font-semibold">{filteredAssets.length}</span> dari{' '}
            <span className="font-semibold">{assets.length}</span> aset
          </p>
          {(searchQuery || filterProperty !== "all" || filterStatus !== "all" || filterCategory !== "all") && (
            <button
              onClick={handleReset}
              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              Reset Filter
            </button>
          )}
        </div>

        {/* TABLE VIEW (Desktop) */}
        <AssetTable assets={filteredAssets} />

        {/* CARD VIEW (Mobile) */}
        <AssetCards assets={filteredAssets} />

        {/* EMPTY STATE */}
        {filteredAssets.length === 0 && (
          <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Tidak ada aset ditemukan
            </h3>
            <p className="text-gray-500 mb-4">
              Coba ubah filter atau kata kunci pencarian Anda
            </p>
            <button
              onClick={handleReset}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              Reset Filter
            </button>
          </div>
        )}
      </div>
    </div>
  );
}