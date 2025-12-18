import React from "react";
import { Download, RefreshCw, Home, DollarSign, MapPin, Clock, TrendingUp } from "lucide-react";

export default function ScrapingSummaryPage() {
  const formatRupiah = (num) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(num);
    
  const summaryData = [
    { region: 'Jakarta Selatan', properties: 145, avgPrice: 2500000, minPrice: 1200000, maxPrice: 5000000, lastUpdate: '2 jam lalu', status: 'success' },
    { region: 'Bandung', properties: 98, avgPrice: 1800000, minPrice: 900000, maxPrice: 3500000, lastUpdate: '3 jam lalu', status: 'success' },
    { region: 'Yogyakarta', properties: 76, avgPrice: 1500000, minPrice: 800000, maxPrice: 2800000, lastUpdate: '1 jam lalu', status: 'success' },
    { region: 'Surabaya', properties: 112, avgPrice: 2000000, minPrice: 1000000, maxPrice: 4000000, lastUpdate: '5 jam lalu', status: 'warning' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Scraping Summary</h1>
          <p className="text-sm text-gray-600">Ringkasan data scraping kompetitor real-time</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:shadow-lg active:scale-95">
            <RefreshCw className="w-4 h-4" />
            <span className="font-medium">Refresh</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all hover:shadow-lg active:scale-95">
            <Download className="w-4 h-4" />
            <span className="font-medium">Export</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <Home className="w-6 h-6 text-white" />
            </div>
            <TrendingUp className="w-4 h-4 text-green-500" />
          </div>
          <p className="text-sm text-gray-500 mb-1">Total Properties</p>
          <p className="text-3xl font-bold text-gray-900">431</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <TrendingUp className="w-4 h-4 text-green-500" />
          </div>
          <p className="text-sm text-gray-500 mb-1">Avg Price</p>
          <p className="text-2xl font-bold text-gray-900">{formatRupiah(1950000)}</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <MapPin className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="text-sm text-gray-500 mb-1">Regions</p>
          <p className="text-3xl font-bold text-gray-900">4</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
              <Clock className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="text-sm text-gray-500 mb-1">Last Update</p>
          <p className="text-2xl font-bold text-gray-900">1 jam lalu</p>
        </div>
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Region</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Properties</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Avg Price</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Min Price</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Max Price</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Last Update</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {summaryData.map((row, idx) => (
                <tr key={idx} className="hover:bg-blue-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span className="text-sm font-semibold text-gray-900">{row.region}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-gray-700">{row.properties}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-bold text-green-600">{formatRupiah(row.avgPrice)}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-600">{formatRupiah(row.minPrice)}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-600">{formatRupiah(row.maxPrice)}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-500">{row.lastUpdate}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                      row.status === 'success' 
                        ? 'bg-green-100 text-green-700 border border-green-200' 
                        : 'bg-yellow-100 text-yellow-700 border border-yellow-200'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full mr-2 ${
                        row.status === 'success' ? 'bg-green-500' : 'bg-yellow-500'
                      }`}></span>
                      {row.status === 'success' ? 'Updated' : 'Pending'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        {summaryData.map((row, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{row.region}</h3>
                  <p className="text-xs text-gray-500">{row.properties} properties</p>
                </div>
              </div>
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                row.status === 'success' 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-yellow-100 text-yellow-700'
              }`}>
                <span className={`w-1.5 h-1.5 rounded-full mr-2 ${
                  row.status === 'success' ? 'bg-green-500' : 'bg-yellow-500'
                }`}></span>
                {row.status === 'success' ? 'Updated' : 'Pending'}
              </span>
            </div>

            {/* Price Info */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="bg-green-50 rounded-lg p-3 border border-green-100">
                <p className="text-xs text-green-600 font-medium mb-1">Avg Price</p>
                <p className="text-sm font-bold text-green-700">{formatRupiah(row.avgPrice)}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                <p className="text-xs text-gray-600 font-medium mb-1">Min Price</p>
                <p className="text-sm font-semibold text-gray-700">{formatRupiah(row.minPrice)}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                <p className="text-xs text-gray-600 font-medium mb-1">Max Price</p>
                <p className="text-sm font-semibold text-gray-700">{formatRupiah(row.maxPrice)}</p>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-400" />
                <span className="text-xs text-gray-500">Updated {row.lastUpdate}</span>
              </div>
              <button className="text-xs font-medium text-blue-600 hover:text-blue-700">
                View Details →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}