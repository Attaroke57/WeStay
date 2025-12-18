import { useState } from "react";
import { Plus, Download, Upload, Package } from "lucide-react";
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

  const stats = getAssetStats();
  const properties = getUniqueProperties();

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl shadow-lg">
                <Package className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Monitor Aset
              </h1>
            </div>
            <p className="text-sm text-gray-600 ml-14">
              Kelola dan pantau kondisi semua aset properti secara real-time
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <button className="flex items-center justify-center gap-2 px-5 py-2.5 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 rounded-xl transition-all font-medium text-sm shadow-sm hover:shadow">
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Export</span>
            </button>
            <button className="flex items-center justify-center gap-2 px-5 py-2.5 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 rounded-xl transition-all font-medium text-sm shadow-sm hover:shadow">
              <Upload className="w-4 h-4" />
              <span className="hidden sm:inline">Import</span>
            </button>
            <button className="flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl transition-all font-medium text-sm shadow-lg hover:shadow-xl">
              <Plus className="w-5 h-5" />
              <span>Tambah Aset</span>
            </button>
          </div>
        </div>

        {/* SUMMARY CARDS */}
        <div className="mb-8">
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
        <div className="mb-5 flex items-center justify-between bg-white rounded-lg px-4 py-3 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
            <p className="text-sm text-gray-700">
              Menampilkan <span className="font-bold text-blue-600">{filteredAssets.length}</span> dari{' '}
              <span className="font-semibold text-gray-900">{assets.length}</span> aset
            </p>
          </div>
          {(searchQuery || filterProperty !== "all" || filterStatus !== "all" || filterCategory !== "all") && (
            <button
              onClick={handleReset}
              className="text-sm text-blue-600 hover:text-blue-700 font-semibold hover:underline"
            >
              Reset Semua Filter
            </button>
          )}
        </div>

        {/* TABLE VIEW (Desktop) */}
        <AssetTable assets={filteredAssets} />

        {/* CARD VIEW (Mobile) */}
        <AssetCards assets={filteredAssets} />

        {/* EMPTY STATE */}
        {filteredAssets.length === 0 && (
          <div className="bg-white rounded-xl border border-gray-200 p-16 text-center shadow-sm">
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                <svg
                  className="w-10 h-10 text-blue-600"
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Tidak ada aset ditemukan
              </h3>
              <p className="text-gray-500 mb-6 text-sm leading-relaxed">
                Maaf, kami tidak menemukan aset yang sesuai dengan kriteria pencarian Anda. Coba ubah filter atau kata kunci pencarian.
              </p>
              <button
                onClick={handleReset}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all text-sm font-semibold shadow-lg hover:shadow-xl"
              >
                Reset Semua Filter
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}