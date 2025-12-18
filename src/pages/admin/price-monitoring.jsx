import React, { useState } from "react";
import { Download, Filter, BarChart3, TrendingUp, TrendingDown, AlertCircle, RefreshCw, DollarSign } from "lucide-react";

export default function PriceMonitoringPage() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  
  const formatRupiah = (num) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(num);
      
  const priceData = [
    { id: 1, property: 'Kos Mawar Jakarta', ourPrice: 2500000, competitorAvg: 2300000, difference: 8.7, trend: 'up', recommendation: 'Turunkan 5%', priority: 'high' },
    { id: 2, property: 'Kos Melati Bandung', ourPrice: 1800000, competitorAvg: 1900000, difference: -5.3, trend: 'down', recommendation: 'Naikkan 3%', priority: 'medium' },
    { id: 3, property: 'Kos Anggrek Yogya', ourPrice: 1500000, competitorAvg: 1550000, difference: -3.2, trend: 'down', recommendation: 'Pertahankan', priority: 'low' },
    { id: 4, property: 'Kos Dahlia Surabaya', ourPrice: 2200000, competitorAvg: 2100000, difference: 4.8, trend: 'up', recommendation: 'Turunkan 2%', priority: 'medium' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Price Monitoring</h1>
          <p className="text-sm text-gray-600">Monitor dan bandingkan harga dengan kompetitor secara real-time</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 bg-white rounded-lg hover:bg-gray-50 transition-all hover:shadow-md active:scale-95 font-medium">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:shadow-lg active:scale-95 font-medium">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6">
        <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <BarChart3 className="w-5 h-5 text-blue-600" />
          </div>
          <p className="text-xs md:text-sm text-gray-500 mb-1">Avg Our Price</p>
          <p className="text-lg md:text-2xl font-bold text-gray-900">{formatRupiah(2000000)}</p>
          <div className="flex items-center gap-1 mt-2">
            <TrendingUp className="w-3 h-3 text-green-600" />
            <p className="text-xs text-green-600 font-medium">+2.5% bulan lalu</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <RefreshCw className="w-5 h-5 text-purple-600" />
          </div>
          <p className="text-xs md:text-sm text-gray-500 mb-1">Competitor Avg</p>
          <p className="text-lg md:text-2xl font-bold text-gray-900">{formatRupiah(1962500)}</p>
          <div className="flex items-center gap-1 mt-2">
            <TrendingUp className="w-3 h-3 text-blue-600" />
            <p className="text-xs text-blue-600 font-medium">+1.8% bulan lalu</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <AlertCircle className="w-5 h-5 text-red-600" />
          </div>
          <p className="text-xs md:text-sm text-gray-500 mb-1">Price Above</p>
          <p className="text-3xl font-bold text-gray-900">2</p>
          <p className="text-xs text-gray-500 mt-2">Properties lebih mahal</p>
        </div>

        <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
              <TrendingDown className="w-6 h-6 text-white" />
            </div>
            <AlertCircle className="w-5 h-5 text-green-600" />
          </div>
          <p className="text-xs md:text-sm text-gray-500 mb-1">Price Below</p>
          <p className="text-3xl font-bold text-gray-900">2</p>
          <p className="text-xs text-gray-500 mt-2">Properties lebih murah</p>
        </div>
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Property</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Our Price</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Competitor Avg</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Difference</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Trend</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Recommendation</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {priceData.map((row) => (
                <tr key={row.id} className="hover:bg-blue-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${
                        row.priority === 'high' ? 'bg-red-500' :
                        row.priority === 'medium' ? 'bg-yellow-500' :
                        'bg-green-500'
                      }`}></div>
                      <span className="text-sm font-semibold text-gray-900">{row.property}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-bold text-blue-600">{formatRupiah(row.ourPrice)}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-gray-700">{formatRupiah(row.competitorAvg)}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-bold ${
                      row.difference > 0 
                        ? 'bg-red-100 text-red-700' 
                        : 'bg-green-100 text-green-700'
                    }`}>
                      {row.difference > 0 ? '+' : ''}{row.difference}%
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      {row.trend === 'up' ? (
                        <>
                          <TrendingUp className="w-5 h-5 text-red-600" />
                          <span className="text-xs text-red-600 font-medium">Up</span>
                        </>
                      ) : (
                        <>
                          <TrendingDown className="w-5 h-5 text-green-600" />
                          <span className="text-xs text-green-600 font-medium">Down</span>
                        </>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 rounded-lg text-xs font-semibold border border-yellow-300">
                      {row.recommendation}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-medium hover:bg-blue-700 transition-all hover:shadow-md active:scale-95">
                      Adjust Price
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile/Tablet Card View */}
      <div className="lg:hidden space-y-4">
        {priceData.map((row) => (
          <div key={row.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2 flex-1">
                <div className={`w-3 h-3 rounded-full flex-shrink-0 ${
                  row.priority === 'high' ? 'bg-red-500' :
                  row.priority === 'medium' ? 'bg-yellow-500' :
                  'bg-green-500'
                }`}></div>
                <h3 className="text-base font-bold text-gray-900">{row.property}</h3>
              </div>
              <div className="flex items-center gap-1">
                {row.trend === 'up' ? (
                  <TrendingUp className="w-5 h-5 text-red-600" />
                ) : (
                  <TrendingDown className="w-5 h-5 text-green-600" />
                )}
              </div>
            </div>

            {/* Price Comparison */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                <p className="text-xs text-blue-600 font-medium mb-1">Our Price</p>
                <p className="text-sm font-bold text-blue-700">{formatRupiah(row.ourPrice)}</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-3 border border-purple-100">
                <p className="text-xs text-purple-600 font-medium mb-1">Competitor Avg</p>
                <p className="text-sm font-bold text-purple-700">{formatRupiah(row.competitorAvg)}</p>
              </div>
            </div>

            {/* Difference & Recommendation */}
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
              <div>
                <p className="text-xs text-gray-500 mb-1">Difference</p>
                <span className={`inline-flex items-center px-3 py-1 rounded-lg text-sm font-bold ${
                  row.difference > 0 
                    ? 'bg-red-100 text-red-700' 
                    : 'bg-green-100 text-green-700'
                }`}>
                  {row.difference > 0 ? '+' : ''}{row.difference}%
                </span>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500 mb-1">Recommendation</p>
                <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 rounded-lg text-xs font-semibold border border-yellow-300">
                  {row.recommendation}
                </span>
              </div>
            </div>

            {/* Action Button */}
            <button className="w-full px-4 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all hover:shadow-md active:scale-95">
              Adjust Price →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}