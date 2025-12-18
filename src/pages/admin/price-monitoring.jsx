import React from "react";
import { Download, Filter, BarChart3, TrendingUp } from "lucide-react";


 export default function PriceMonitoringPage() {
  const formatRupiah = (num) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(num);
      
  const priceData = [
    { id: 1, property: 'Kos Mawar Jakarta', ourPrice: 2500000, competitorAvg: 2300000, difference: 8.7, trend: 'up', recommendation: 'Turunkan 5%' },
    { id: 2, property: 'Kos Melati Bandung', ourPrice: 1800000, competitorAvg: 1900000, difference: -5.3, trend: 'down', recommendation: 'Naikkan 3%' },
    { id: 3, property: 'Kos Anggrek Yogya', ourPrice: 1500000, competitorAvg: 1550000, difference: -3.2, trend: 'down', recommendation: 'Pertahankan' },
    { id: 4, property: 'Kos Dahlia Surabaya', ourPrice: 2200000, competitorAvg: 2100000, difference: 4.8, trend: 'up', recommendation: 'Turunkan 2%' },
  ];

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Price Monitoring</h1>
          <p className="text-sm text-gray-500 mt-1">Monitor dan bandingkan harga dengan kompetitor</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      {/* Price Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg p-6 border">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-500">Avg Our Price</p>
            <BarChart3 className="w-5 h-5 text-blue-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900">{formatRupiah(2000000)}</p>
          <p className="text-xs text-green-600 mt-1">+2.5% dari bulan lalu</p>
        </div>

        <div className="bg-white rounded-lg p-6 border">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-500">Competitor Avg</p>
            <BarChart3 className="w-5 h-5 text-purple-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900">{formatRupiah(1962500)}</p>
          <p className="text-xs text-blue-600 mt-1">+1.8% dari bulan lalu</p>
        </div>

        <div className="bg-white rounded-lg p-6 border">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-500">Price Above</p>
            <TrendingUp className="w-5 h-5 text-red-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900">2</p>
          <p className="text-xs text-gray-500 mt-1">Properties</p>
        </div>

        <div className="bg-white rounded-lg p-6 border">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-500">Price Below</p>
            <TrendingUp className="w-5 h-5 text-green-600 rotate-180" />
          </div>
          <p className="text-2xl font-bold text-gray-900">2</p>
          <p className="text-xs text-gray-500 mt-1">Properties</p>
        </div>
      </div>

      {/* Price Comparison Table */}
      <div className="bg-white rounded-lg border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Property</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Our Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Competitor Avg</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Difference</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Trend</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Recommendation</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {priceData.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.property}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-blue-600">{formatRupiah(row.ourPrice)}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{formatRupiah(row.competitorAvg)}</td>
                  <td className="px-6 py-4">
                    <span className={`text-sm font-semibold ${row.difference > 0 ? 'text-red-600' : 'text-green-600'}`}>
                      {row.difference > 0 ? '+' : ''}{row.difference}%
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    {row.trend === 'up' ? (
                      <TrendingUp className="w-5 h-5 text-red-600" />
                    ) : (
                      <TrendingUp className="w-5 h-5 text-green-600 rotate-180" />
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">
                      {row.recommendation}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      Adjust Price
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}